from fastapi import HTTPException
from sqlalchemy.ext.asyncio import AsyncSession


from app.domain.pact.contract.repository.contract_lookup.find_contracts import find_contracts
from app.utility.abstraction.abstract_service import AbstractService
from app.utility.pagination.pagination_schema import Pagination
from app.domain.pact.contract.repository.contract_lookup.count_contracts import count_contracts


class FindContracts(AbstractService):
    async def handle(self, **kwargs)-> Pagination:
        db: AsyncSession = kwargs.get("db")
        limit: int = kwargs.get("limit", 10)
        skip: int = kwargs.get("skip", 0)
        condition: dict = kwargs.get("condition", {})

        stmt, count_stmt = find_contracts(**kwargs)

        result = await db.execute(stmt)
        managers = result.scalars().all()

        count_result = await db.execute(count_stmt)
        total = count_result.scalar_one()

        return Pagination(managers, total, limit, skip)
    
class CountContracts(AbstractService):
    async def handle(self, **kwargs) -> int:
        db: AsyncSession = kwargs.get("db")
        stmt = count_contracts()
        result = await db.execute(stmt)
        total = result.scalar_one()
        return total