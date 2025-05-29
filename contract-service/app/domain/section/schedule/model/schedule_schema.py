from typing import Optional
from datetime import date, datetime
from pydantic import BaseModel, EmailStr


class ScheduleSchema(BaseModel):
    schedule_id: str | None = None  

    starting_date: date | None = None  # ✅ String → date 변경
    property_name: str | None = None
    property_address: str | None = None

    piecework_rate1: str | None = None
    piecework_rate2: str | None = None
    piecework_rate3: str | None = None
    piecework_rate4: str | None = None
    piecework_rate5: str | None = None
    piecework_rate6: str | None = None
    piecework_rate7: str | None = None
    piecework_rate8: str | None = None
    piecework_rate9: str | None = None

    piecework_content1: str | None = None
    piecework_content2: str | None = None
    piecework_content3: str | None = None
    piecework_content4: str | None = None
    piecework_content5: str | None = None
    piecework_content6: str | None = None
    piecework_content7: str | None = None
    piecework_content8: str | None = None
    piecework_content9: str | None = None

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }