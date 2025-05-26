from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.status.rejected.model.rejected_entity import RejectedEntity


async def count_rejecteds(**kwargs):
    
    return select(func.count()).select_from(RejectedEntity)