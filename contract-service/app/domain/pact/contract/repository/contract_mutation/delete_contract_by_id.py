from sqlalchemy.sql import delete

from app.domain.pact.contract.model.contract_entity import ContractEntity



    
async def delete_contract_by_id(**kwargs):
    
    contract_id = kwargs.get("contract_id")

    return delete(ContractEntity).where(ContractEntity.contract_id == contract_id)