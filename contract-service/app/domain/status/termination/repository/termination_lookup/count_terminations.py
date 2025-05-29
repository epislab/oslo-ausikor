from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.status.termination.model.termination_entity import TerminationEntity


async def count_terminations(**kwargs):
    
    return select(func.count()).select_from(TerminationEntity)