from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.sql import update

from app.domain.pact.contract.model.contract_entity import ContractEntity



async def update_contract(**kwargs):
                      
    updated_contract = kwargs.get("updated_contract")

    # 업데이트할 필드만 딕셔너리에 추가
    update_fields = {}
   
    # 필드가 있을 경우만 업데이트 실행
    if update_fields:
        stmt = (
            update(ContractEntity)
            .where(ContractEntity.contract_id == updated_contract.contract_id)
            .values(**update_fields)
        )
        return stmt
    else:
        return None
    
    
