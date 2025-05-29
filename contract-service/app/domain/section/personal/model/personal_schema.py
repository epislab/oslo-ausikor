from typing import Optional
from datetime import date, datetime
from pydantic import BaseModel, EmailStr


class PersonalSchema(BaseModel):
    personal_id: str | None = None  

    nationality: str | None = None
    passport_number: str | None = None
    tax_file_number: str | None = None
    visa_grant_number: str | None = None
    visa_expiry_date: date | None = None  # ✅ String → date 변경

    emergency_name: str | None = None
    emergency_phone: str | None = None

    fund_name: str | None = None
    bank_name: str | None = None
    account_owner: str | None = None
    bsb_number: str | None = None
    account_number: str | None = None

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    } 