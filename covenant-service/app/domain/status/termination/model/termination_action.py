from enum import Enum

class TerminationAction(Enum):
    
    CREATE_NEW_TERMINATION = "create_new_termination"
    DELETE_TERMINATION_BY_ID = "delete_termination_by_id"
    
    FIND_TERMINATIONS = "find_terminations"
    COUNT_TERMINATIONS = "count_terminations"
    
    GET_ALL_TERMINATIONS = "get_all_terminations"
    GET_TERMINATION_BY_ID = "get_termination_by_id"
    
    UPDATE_TERMINATION = "update_termination"
    PATCH_TERMINATION = "patch_termination"
