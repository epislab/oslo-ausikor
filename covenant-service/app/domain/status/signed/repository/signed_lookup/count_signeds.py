from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.status.signed.model.signed_entity import SignedEntity


async def count_signeds(**kwargs):
    
    return select(func.count()).select_from(SignedEntity)