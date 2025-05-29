from abc import ABC, abstractmethod
from sqlalchemy.ext.asyncio import AsyncSession
from app.domain.pact.contract.model.contract_schema import ContractSchema

class UpdateService(ABC):
    """생성 전략을 위한 추상 클래스"""
    
    @abstractmethod
    def update(self, db: AsyncSession, update_contract: ContractSchema):
        pass