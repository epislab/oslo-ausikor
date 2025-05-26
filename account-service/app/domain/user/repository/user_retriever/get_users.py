from sqlalchemy.future import select

from app.domain.user.model.user_entity import UserEntity

async def get_all_users(**kwargs):
   
    skip = kwargs.get("skip")
    limit = kwargs.get("limit")
    
    return select(UserEntity).offset(skip).limit(limit)


async def get_users_by_name(**kwargs):
    
    name = kwargs.get("name")
   
    return select(UserEntity).where(UserEntity.name == name)