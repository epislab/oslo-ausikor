from pydantic import BaseModel
from datetime import datetime

class ContractSchema(BaseModel):
    contract_id: str | None = None
    contract_title: str
    company_id: str
    user_id: str
    status: str

    personal_sign: str | None = None
    policy_sign: str | None = None
    agreement_sign: str | None = None
    guideline_sign: str | None = None
    survey_sign: str | None = None
    employer_sign: str | None = None

    starting_date: datetime | None = None
    effective_date: datetime | None = None
    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }