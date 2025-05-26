from typing import Optional
from datetime import date, datetime
from pydantic import BaseModel, EmailStr


class GuidelineSchema(BaseModel):
    guideline_id: str | None = None  

    guide_title1: str | None = None
    guide_title2: str | None = None
    guide_title3: str | None = None
    guide_title4: str | None = None
    guide_title5: str | None = None
    guide_title6: str | None = None
    guide_title7: str | None = None
    guide_title8: str | None = None
    guide_title9: str | None = None
    guide_title10: str | None = None
    guide_title11: str | None = None
    guide_title12: str | None = None

    guide_content1: str | None = None
    guide_content2: str | None = None
    guide_content3: str | None = None
    guide_content4: str | None = None
    guide_content5: str | None = None
    guide_content6: str | None = None
    guide_content7: str | None = None
    guide_content8: str | None = None
    guide_content9: str | None = None
    guide_content10: str | None = None
    guide_content11: str | None = None
    guide_content12: str | None = None

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }