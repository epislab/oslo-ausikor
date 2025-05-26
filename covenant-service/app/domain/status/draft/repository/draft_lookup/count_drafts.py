from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.status.draft.model.draft_entity import DraftEntity


async def count_drafts(**kwargs):
    
    return select(func.count()).select_from(DraftEntity)