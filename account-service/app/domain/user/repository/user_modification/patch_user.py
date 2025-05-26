from sqlalchemy import select, func, update 

from app.domain.user.model.user_entity import UserEntity

async def patch_user(**kwargs):
                      
    patched_user = kwargs.get("patched_user")
    
    return update(UserEntity).where(UserEntity.user_id == patched_user.user_id).values(**patched_user.model_dump())