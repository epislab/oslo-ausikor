from enum import Enum

class AgreementAction(Enum):
    
    CREATE_NEW_AGREEMENT = "create_new_agreement"
    DELETE_AGREEMENT_BY_ID = "delete_agreement_by_id"
    
    FIND_AGREEMENTS = "find_agreements"
    COUNT_AGREEMENTS = "count_agreements"
    
    GET_ALL_AGREEMENTS = "get_all_agreements"
    GET_AGREEMENT_BY_ID = "get_agreement_by_id"
    
    UPDATE_AGREEMENT = "update_agreement"
    PATCH_AGREEMENT = "patch_agreement"
