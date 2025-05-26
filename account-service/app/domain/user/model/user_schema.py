from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date, datetime

class UserSchema(BaseModel):
    user_id: str | None = None
    personal_id: str | None = None
    survey_id: str | None = None
    member_number: str | None = None
    roles: str | None = None
    fullname: str | None = None
    nickname: str | None = None
    gender: str | None = None
    birth_date: date | None = None  # ✅ 날짜 타입
    email: EmailStr
    phone: str | None = None
    street: str | None = None
    suburb: str | None = None
    postcode: str | None = None
    profile_image: str | None = None
    password: str
    created_at: datetime | None = None  # ✅ 생성 및 수정일은 datetime 사용
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }

class UserCreateRequest(BaseModel):
    username: str
    email: EmailStr
    password: str
    full_name: Optional[str] = None

class UserLoginRequest(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    full_name: Optional[str] = None
    is_active: bool
    created_at: datetime
    updated_at: datetime

class UserUpdateRequest(BaseModel):
    username: Optional[str] = None
    email: Optional[EmailStr] = None
    full_name: Optional[str] = None
    is_active: Optional[bool] = None 