from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession


from app.utility.pagination.pagination_builder import Pagination
from app.domain.user.model.user_entity import UserEntity
from app.domain.user.model.user_schema import UserSchema
from app.domain.user.repository.user_lookup import count_users, find_users, login
from app.utility.abstraction.abstract_service import AbstractService


class FindUsers(AbstractService):
    async def handle(self, **kwargs)-> Pagination:
        db: AsyncSession = kwargs.get("db")
        limit: int = kwargs.get("limit", 10)
        skip: int = kwargs.get("skip", 0)
        condition: dict = kwargs.get("condition", {})

        stmt, count_stmt = find_users(**kwargs)

        result = await db.execute(stmt)
        managers = result.scalars().all()

        count_result = await db.execute(count_stmt)
        total = count_result.scalar_one()

        return Pagination(managers, total, limit, skip)
    
class CountUsers(AbstractService):
    async def handle(self, db: AsyncSession)->int:
        stmt = count_users()
        result = await db.execute(stmt)
        total = result.scalar_one()
        return total
    

    
class FindUserIdByEmail(AbstractService):
    async def handle(self, **kwargs):
        
        db: AsyncSession = kwargs.get("db")
        user_schema: UserSchema = kwargs.get("user_schema")
        the_user = db.query(UserEntity).filter(UserEntity.email == user_schema.email).first()

        return the_user.user_id
    
class FindEmailByUsedEmail(AbstractService):
    async def handle(self, db: AsyncSession, email: str):
        the_user = db.query(UserEntity).filter(UserEntity.email == email).first()

        return the_user.email