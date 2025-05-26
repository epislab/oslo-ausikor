from sqlalchemy.sql import delete

from app.domain.user.model.user_entity import UserEntity
from app.domain.user.model.user_schema import UserSchema
from app.utility.security.password_factory import PasswordFactory


password_factory = PasswordFactory()

async def create_new_user(**kwargs):
    
    new_user: UserSchema = kwargs.get("new_user")
    
    hashed_password = password_factory.create(new_user.password)

    return UserEntity(
        user_id=new_user.user_id,
        personal_id=new_user.personal_id,
        survey_id=new_user.survey_id,
        member_number=new_user.member_number,
        roles=new_user.roles,
        fullname=new_user.fullname,
        nickname=new_user.nickname,
        gender=new_user.gender,
        birth_date=new_user.birth_date,
        email=new_user.email,
        phone=new_user.phone,
        street=new_user.street,
        suburb=new_user.suburb,
        postcode=new_user.postcode,
        profile_image=new_user.profile_image,
        password=hashed_password,  # 해싱된 비밀번호 저장
    )