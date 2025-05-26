from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import update

from app.domain.pact.contract.model.contract_entity import ContractEntity



async def patch_contract(**kwargs):
                      
    patched_contract = kwargs.get("patched_contract")
    
    return update(ContractEntity).where(ContractEntity.contract_id == patched_contract.contract_id).values(**patched_contract.model_dump())