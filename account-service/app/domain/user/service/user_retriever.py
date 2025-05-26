from sqlalchemy.ext.asyncio import AsyncSession



from app.utility.abstraction.abstract_service import AbstractService    

from app.domain.user.repository.user_lookup import get_all_users, get_user_by_id, get_user_by_email, get_users_by_name, get_stored_refresh_token



class GetAllUsers(AbstractService):
    async def handle(self, db: AsyncSession):
        query = await get_all_users()
        result = await db.execute(query)
        return result.scalars().all()
    
    

    
class GetUserById(AbstractService):
    async def handle(self, db: AsyncSession, user_id: str):
        query = await get_user_by_id(user_id)
        result = await db.execute(query)
        return result.scalars().first()
    

class GetUserByEmail(AbstractService):
    
    async def handle(self, db: AsyncSession, email: str):
        query = await get_user_by_email(email)
        result = await db.execute(query)
        return result.scalars().first()
    
    
class GetUsersByName(AbstractService):
    
    async def handle(self, db: AsyncSession, name: str):
        query = await get_users_by_name(name)
        result = await db.execute(query)
        return result.scalars().all()
    
    
    
    
class GetStoredRefreshToken(AbstractService):
    
    async def handle(self, db: AsyncSession, personal_id: str):
        query = await get_stored_refresh_token(personal_id)
        result = await db.execute(query)
        return result.scalars().first()