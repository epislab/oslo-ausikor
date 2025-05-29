from sqlalchemy.ext.asyncio import AsyncSession

from app.utility.abstraction.abstract_service import AbstractService
from app.domain.pact.contract.model.contract_schema import ContractSchema
from app.domain.pact.contract.repository.contract_mutation.create_new_contract import create_new_contract
from app.domain.pact.contract.repository.contract_mutation.delete_contract_by_id import delete_contract_by_id
from app.domain.pact.contract.repository.contract_retriever.get_contract import get_contract_by_id

class CreateNewContract(AbstractService):
    
    async def handle(self, db: AsyncSession, new_contract: ContractSchema):
        try:
            contract_entity = await create_new_contract(new_contract)
            db.add(contract_entity) # 비동기 I/O 작업(DB 접근)이 아니므로 await를 붙일 필요가 없음
            await db.commit()
            return "success"
        except Exception as e:
            print(e)
            await db.rollback()
            return "fail"
        
class DeleteContractById(AbstractService):
    
    async def handle(self, db: AsyncSession, contract_id: str):
        try:
            # 삭제할 사용자 조회
            result = await db.execute(await get_contract_by_id(contract_id))
            contract_to_delete = result.scalars().first()

            if not contract_to_delete:
                return {"message": "Contract not found", "status": "failed"}

            # 사용자 삭제 실행
            await db.execute(delete_contract_by_id(contract_id))
            await db.commit()  # 트랜잭션 반영

            return {"message": "Contract deleted successfully", "status": "success", "contract": contract_to_delete}

        except Exception as e:
            print(f"[ERROR] Contract deletion failed: {e}")
            await db.rollback()
            raise e