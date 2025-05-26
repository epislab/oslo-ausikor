from sqlalchemy import select, func 
from app.domain.user.model.user_entity import UserEntity



async def count_users(**kwargs):
    
    return select(func.count()).select_from(UserEntity)




