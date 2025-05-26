from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import update
from app.domain.user.model.user_entity import UserEntity
from app.utility.security.password_factory import PasswordFactory

password_factory = PasswordFactory()

async def update_user(**kwargs):
                      
    updated_user = kwargs.get("updated_user")

    print("🔥 update_user_command 로 진입함")
    print("updated_user: ", updated_user)

    # 업데이트할 필드만 딕셔너리에 추가
    update_fields = {}
    if updated_user.user_id is not None:
        update_fields["personal_id"] = updated_user.user_id
    if updated_user.survey_id is not None:
        update_fields["survey_id"] = updated_user.survey_id
    if updated_user.member_number is not None:
        update_fields["member_number"] = updated_user.member_number
    if updated_user.roles is not None:
        update_fields["roles"] = updated_user.roles
    if updated_user.fullname is not None:
        update_fields["fullname"] = updated_user.fullname
    if updated_user.nickname is not None:
        update_fields["nickname"] = updated_user.nickname
    if updated_user.gender is not None:
        update_fields["gender"] = updated_user.gender
    if updated_user.birth_date is not None:
        update_fields["birth_date"] = updated_user.birth_date
    if updated_user.email is not None:
        update_fields["email"] = updated_user.email
    if updated_user.phone is not None:
        update_fields["phone"] = updated_user.phone
    if updated_user.street is not None:
        update_fields["street"] = updated_user.street
    if updated_user.suburb is not None:
        update_fields["suburb"] = updated_user.suburb
    if updated_user.postcode is not None:
        update_fields["postcode"] = updated_user.postcode
    if updated_user.profile_image is not None:
        update_fields["profile_image"] = updated_user.profile_image
    if updated_user.password is not None:
        update_fields["password"] = password_factory.create(updated_user.password)  # 비밀번호 해싱 적용

    # 필드가 있을 경우만 업데이트 실행
    if update_fields:
        stmt = (
            update(UserEntity)
            .where(UserEntity.user_id == updated_user.user_id)
            .values(**update_fields)
        )
        return stmt
    else:
        return None