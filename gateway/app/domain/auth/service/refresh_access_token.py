from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.utility.abstraction.abstract_service import AbstractService

class RefreshAccessToken(AbstractService):

    async def handle(self, **kwargs):
        """ 새로운 access_token 발급 핸들러 """
        
        db: AsyncSession = kwargs.get("db")
        refresh_token: str = kwargs.get("refresh_token")