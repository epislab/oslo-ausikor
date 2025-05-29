from datetime import datetime
from pydantic import BaseModel

class AgreementSchema(BaseModel):
    agreement_id: str | None = None  # ✅ Primary Key
    description: str | None = None
    
    agreement1: str | None = None
    agreement2: str | None = None
    agreement3: str | None = None
    agreement4: str | None = None
    agreement5: str | None = None
    agreement6: str | None = None
    agreement7: str | None = None
    agreement8: str | None = None
    agreement9: str | None = None
    agreement10: str | None = None

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }