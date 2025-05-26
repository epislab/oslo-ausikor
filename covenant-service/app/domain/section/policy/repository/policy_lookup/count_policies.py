from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.section.policy.model.policy_entity import PolicyEntity


async def count_policies(**kwargs):
    
    return select(func.count()).select_from(PolicyEntity)