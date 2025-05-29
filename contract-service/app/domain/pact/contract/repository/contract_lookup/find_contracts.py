from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.pact.contract.model.contract_entity import ContractEntity

async def find_contracts(**kwargs):
    
    skip = kwargs.get("skip")
    limit = kwargs.get("limit")
    # condition = kwargs.get("condition")
    # stmt = select(ContractEntity).filter_by(**condition).offset(skip).limit(limit)
    # count_stmt = select(func.count()).select_from(ContractEntity).filter_by(**condition)
    
    stmt = select(ContractEntity).offset(skip).limit(limit)
    count_stmt = select(func.count()).select_from(ContractEntity)
    return stmt, count_stmt