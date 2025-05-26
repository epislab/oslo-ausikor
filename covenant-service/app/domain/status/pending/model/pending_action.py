from enum import Enum

class PendingAction(Enum):
    
    CREATE_NEW_PENDING = "create_new_pending"
    DELETE_PENDING_BY_ID = "delete_pending_by_id"
    
    FIND_PENDINGS = "find_pendings"
    COUNT_PENDINGS = "count_pendings"
    
    GET_ALL_PENDINGS = "get_all_pendings"
    GET_PENDING_BY_ID = "get_pending_by_id"
    
    UPDATE_PENDING = "update_pending"
    PATCH_PENDING = "patch_pending"
