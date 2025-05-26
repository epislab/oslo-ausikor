from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.section.personal.model.personal_entity import PersonalEntity


async def count_personals(**kwargs):
    
    return select(func.count()).select_from(PersonalEntity)