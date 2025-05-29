from enum import Enum

class RejectedAction(Enum):
    
    CREATE_NEW_REJECTED = "create_new_rejected"
    DELETE_REJECTED_BY_ID = "delete_rejected_by_id"
    
    FIND_REJECTEDS = "find_rejecteds"
    COUNT_REJECTEDS = "count_rejecteds"
    
    GET_ALL_REJECTEDS = "get_all_rejecteds"
    GET_REJECTED_BY_ID = "get_rejected_by_id"
    
    UPDATE_REJECTED = "update_rejected"
    PATCH_REJECTED = "patch_rejected"
