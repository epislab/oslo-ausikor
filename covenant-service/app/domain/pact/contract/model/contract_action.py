from enum import Enum

class ContractAction(Enum):
    
    CREATE_NEW_CONTRACT = "create_new_contract"
    DELETE_CONTRACT_BY_ID = "delete_contract_by_id"
    
    FIND_CONTRACTS = "find_contracts"
    COUNT_CONTRACTS = "count_contracts"
    
    GET_ALL_CONTRACTS = "get_all_contracts"
    GET_CONTRACT_BY_ID = "get_contract_by_id"
    
    UPDATE_CONTRACT = "update_contract"
    PATCH_CONTRACT = "patch_contract"