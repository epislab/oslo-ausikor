from app.domain.pact.contract.controller.contract_factory import ContractFactory
from app.domain.pact.contract.model.contract_action import ContractAction


class ContractController:
    def __init__(self):
        pass


    def create_new_contract(self, **kwargs):
        return ContractFactory.create(ContractAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_contract_by_id(self, **kwargs):
        return ContractFactory.create(ContractAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_contracts(self, **kwargs):
        return ContractFactory.create(ContractAction.FIND_CONTRACTS, **kwargs)

    def count_contracts(self, **kwargs):
        return ContractFactory.create(ContractAction.COUNT_CONTRACTS, **kwargs)

    def get_all_contracts(self, **kwargs):
        return ContractFactory.create(ContractAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_contract_by_id(self, **kwargs):
        return ContractFactory.create(ContractAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_contract(self, **kwargs):
        return ContractFactory.create(ContractAction.UPDATE_CONTRACT, **kwargs)

    def patch_contract(self, **kwargs):
        return ContractFactory.create(ContractAction.PATCH_CONTRACT, **kwargs)