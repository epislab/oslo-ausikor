from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.section.guideline.model.guideline_entity import GuidelineEntity


async def count_guidelines(**kwargs):
    
    return select(func.count()).select_from(GuidelineEntity)