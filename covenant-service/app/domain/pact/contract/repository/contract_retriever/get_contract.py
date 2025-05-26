from sqlalchemy.future import select

from app.domain.pact.contract.model.contract_entity import ContractEntity


async def get_contract_by_id(**kwargs):
    
    contract_id = kwargs.get("contract_id")
   
    return select(ContractEntity).where(ContractEntity.contract_id == contract_id)