from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.utility.abstraction.abstract_service import AbstractService
from app.domain.auth.model.auth_schema import LoginRequest
    
class LogoutUser(AbstractService):
    
    async def handle(self, **kwargs):
        
        db: AsyncSession = kwargs.get("db")
        login_request: LoginRequest = kwargs.get("login_request")
        result:LoginRequest = None
        return {
            "message": "Login successful",
            "result": result.model_dump()
        }
    
    