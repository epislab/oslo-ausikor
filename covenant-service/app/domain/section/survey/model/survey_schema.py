from typing import Optional
from datetime import date, datetime
from pydantic import BaseModel, EmailStr


class SurveySchema(BaseModel):
    survey_id: str | None = None  

    # General Health Information
    have_disease: str | None = None
    have_medications: str | None = None
    have_surgeries: str | None = None
    have_injuries: str | None = None
    have_limitations: str | None = None

    # Mental Health and Well-Being
    have_stress: str | None = None
    have_counseling: str | None = None
    know_eap: str | None = None

    # Health and Safety Awareness
    know_policies: str | None = None
    have_training: str | None = None
    feel_comfortable: str | None = None

    # Allergies and Medical Conditions
    bee_stings: str | None = None
    have_epilepsy: str | None = None
    have_diabetes: str | None = None
    have_pregnant: str | None = None
    have_blood_pressure: str | None = None
    other_allergies: str | None = None

    # Additional Information
    additional_information: str | None = None

    created_at: datetime | None = None
    updated_at: datetime | None = None

    model_config = {
        "from_attributes": True  # ✅ Pydantic v2 스타일 적용
    }