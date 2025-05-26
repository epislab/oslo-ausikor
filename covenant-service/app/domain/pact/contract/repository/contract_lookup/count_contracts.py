from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.pact.contract.model.contract_entity import ContractEntity


async def count_contracts(**kwargs):
    
    return select(func.count()).select_from(ContractEntity)