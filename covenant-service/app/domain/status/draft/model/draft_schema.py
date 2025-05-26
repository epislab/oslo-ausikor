from datetime import datetime
from pydantic import BaseModel

class DraftSchema(BaseModel):
    draft_id: str | None = None  

    draft_title: str
    company_id: str
    user_id: str
    status: str

    personal_sign: str | None = None
    policy_sign: str | None = None
    agreement_sign: str | None = None
    guideline_sign: str | None = None
    survey_sign: str | None = None
    employer_sign: str | None = None

    starting_date: datetime | None = None  # ✅ String → datetime 변경
    effective_date: datetime | None = None  # ✅ String → datetime 변경

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }