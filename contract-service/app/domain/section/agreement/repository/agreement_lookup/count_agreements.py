from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.section.agreement.model.agreement_entity import AgreementEntity


async def count_agreements(**kwargs):
    
    return select(func.count()).select_from(AgreementEntity)