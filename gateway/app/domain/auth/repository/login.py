from sqlalchemy import select, func 
from app.domain.auth.model.auth_entity import AuthEntity





async def login(**kwargs):
    
    email = kwargs.get("email")
    password = kwargs.get("password")
    
    return select(AuthEntity).where(
        AuthEntity.email == email,
        AuthEntity.password == password
    )