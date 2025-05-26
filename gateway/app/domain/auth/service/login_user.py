from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.utility.abstraction.abstract_service import AbstractService
from app.domain.auth.model.auth_schema import LoginRequest
from app.domain.auth.repository.login import login


    
class LoginUser(AbstractService):
    
    async def handle(self, **kwargs):
        
        db: AsyncSession = kwargs.get("db")
        login_request: LoginRequest = kwargs.get("login_request")
        email = login_request.email
        password = login_request.password
    
        query = await login(email, password)
        result = await db.execute(query)
        
        return {
            "message": "Login successful",
            "result": result.model_dump(),
        }
