from sqlalchemy.sql import delete

from app.domain.user.model.user_entity import UserEntity
from app.utility.security.password_factory import PasswordFactory


password_factory = PasswordFactory()

async def delete_user_by_id(**kwargs):
    
    user_id = kwargs.get("user_id")

    return delete(UserEntity).where(UserEntity.user_id == user_id)