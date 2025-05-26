from sqlalchemy.future import select

from app.domain.user.model.user_entity import UserEntity



async def get_user_by_id(**kwargs):
    
    user_id = kwargs.get("user_id")
   
    return select(UserEntity).where(UserEntity.user_id == user_id)


async def get_user_by_email(**kwargs):
    
    email = kwargs.get("email")
   
    return select(UserEntity).where(UserEntity.email == email)



