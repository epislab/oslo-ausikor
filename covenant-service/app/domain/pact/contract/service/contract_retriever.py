from sqlalchemy.ext.asyncio import AsyncSession

from app.domain.pact.contract.repository.contract_retriever.get_contracts import get_all_contracts
from app.domain.pact.contract.repository.contract_retriever.get_contract import get_contract_by_id
from app.utility.abstraction.abstract_service import AbstractService

class GetAllContracts(AbstractService):
    async def handle(self, db: AsyncSession):
        query = await get_all_contracts()
        result = await db.execute(query)
        return result.scalars().all()
    
class GetContractById(AbstractService):
    async def handle(self, db: AsyncSession, contract_id: str):
        query = await get_contract_by_id(contract_id)
        result = await db.execute(query)
        return result.scalars().first()