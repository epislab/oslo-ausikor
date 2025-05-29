from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.status.pending.model.pending_entity import PendingEntity


async def count_pendings(**kwargs):
    
    return select(func.count()).select_from(PendingEntity)