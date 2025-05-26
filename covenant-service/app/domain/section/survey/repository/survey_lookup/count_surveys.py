from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.section.survey.model.survey_entity import SurveyEntity


async def count_surveys(**kwargs):
    
    return select(func.count()).select_from(SurveyEntity)