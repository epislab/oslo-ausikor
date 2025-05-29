from sqlalchemy.future import select

from app.domain.pact.contract.model.contract_entity import ContractEntity
async def get_all_contracts(**kwargs):
   
    skip = kwargs.get("skip")
    limit = kwargs.get("limit")
    
    return select(ContractEntity).offset(skip).limit(limit)