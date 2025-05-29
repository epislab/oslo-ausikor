from sqlalchemy.sql import delete

from app.domain.pact.contract.model.contract_entity import ContractEntity
from app.domain.pact.contract.model.contract_schema import ContractSchema

async def create_new_contract(**kwargs):
    
    new_contract: ContractSchema = kwargs.get("new_contract")
    

    return ContractEntity(
        contract_id=new_contract.contract_id,
    )