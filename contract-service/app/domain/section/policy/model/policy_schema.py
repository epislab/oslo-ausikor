from typing import Optional
from datetime import date, datetime
from pydantic import BaseModel, EmailStr


class PolicySchema(BaseModel):
    policy_id: str | None = None  

    policy1_title: str | None = None
    policy2_title: str | None = None
    policy3_title: str | None = None
    policy4_title: str | None = None
    policy5_title: str | None = None
    policy6_title: str | None = None
    policy7_title: str | None = None
    policy8_title: str | None = None
    policy9_title: str | None = None
    policy10_title: str | None = None

    policy1: str | None = None
    policy2: str | None = None
    policy3: str | None = None
    policy4: str | None = None
    policy5: str | None = None
    policy6: str | None = None
    policy7: str | None = None
    policy8: str | None = None
    policy9: str | None = None
    policy10: str | None = None

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }