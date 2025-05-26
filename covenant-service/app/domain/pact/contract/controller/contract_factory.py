from app.domain.pact.contract.service.contract_mutation import CreateNewContract, DeleteContractById
from app.domain.pact.contract.model.contract_action import ContractAction
from app.domain.pact.contract.service.contract_retriever import GetAllContracts, GetContractById, GetContractByEmail, GetContractsByName
from app.domain.pact.contract.service.contract_mutation import UpdateContract, PatchContract, CountContracts, FindContracts

class ContractFactory:
    
    _strategy_map = {
        
    ContractAction.DELETE_CONTRACT_BY_ID: DeleteContractById(),
    ContractAction.CREATE_NEW_CONTRACT: CreateNewContract(),
    ContractAction.UPDATE_CONTRACT: UpdateContract(),
    ContractAction.PATCH_CONTRACT: PatchContract(),
    ContractAction.COUNT_CONTRACTS: CountContracts(),
    ContractAction.FIND_CONTRACTS: FindContracts(),
    ContractAction.GET_ALL_CONTRACTS: GetAllContracts(),
    ContractAction.GET_CONTRACT_BY_ID: GetContractById(),

    }

    @staticmethod
    async def create(strategy, **kwargs):
        instance = ContractFactory._strategy_map[strategy]
        if not instance:
            raise Exception("invalid strategy")
        return instance.create(**kwargs)