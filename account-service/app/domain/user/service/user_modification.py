from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from gateway.app.foundation.core.abstraction.abstract_service import AbstractService

from app.domain.user.model.user_schema import UserSchema
from app.domain.user.repository.user_lookup import get_user_by_id
from app.domain.user.repository.user_mutation import update_user

class UpdateUser(AbstractService):

    async def handle(self, **kwargs): 
        """ 사용자 정보 업데이트 핸들러 (DB 트랜잭션 관리 포함) """
        
        db: AsyncSession = kwargs.get("db")
        updated_user: UserSchema = kwargs.get("updated_user")
        user_id = updated_user.user_id

        try:
            # 업데이트할 쿼리 가져오기 (update_user()에서 SQLAlchemy update 문 반환)
            stmt = await updated_user(update_user(updated_user))

            if stmt is None:
                return {"message": "No fields to update", "status": "failed"}

            # 업데이트 실행
            await db.execute(stmt)
            await db.commit()  # 커밋하여 데이터베이스 반영

            # 업데이트된 사용자 정보 조회
            result = await db.execute(get_user_by_id(user_id))
            updated_user = result.scalars().first()

            if not updated_user:
                return {"message": "User not found after update", "status": "failed"}

            return {
                "message": "User updated successfully",
                "status": "success",
                "user": updated_user
            }

        except Exception as e:
            print(f"[ERROR] User update failed: {e}")
            await db.rollback()  # 트랜잭션 롤백
            raise e

