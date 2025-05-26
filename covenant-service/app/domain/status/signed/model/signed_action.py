from enum import Enum

class SignedAction(Enum):
    
    CREATE_NEW_SIGNED = "create_new_signed"
    DELETE_SIGNED_BY_ID = "delete_signed_by_id"
    
    FIND_SIGNEDS = "find_signeds"
    COUNT_SIGNEDS = "count_signeds"
    
    GET_ALL_SIGNEDS = "get_all_signeds"
    GET_SIGNED_BY_ID = "get_signed_by_id"
    
    UPDATE_SIGNED = "update_signed"
    PATCH_SIGNED = "patch_signed"
