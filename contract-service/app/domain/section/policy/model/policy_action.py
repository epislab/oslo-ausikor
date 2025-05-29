from enum import Enum

class PolicyAction(Enum):
    
    CREATE_NEW_POLICY = "create_new_policy"
    DELETE_POLICY_BY_ID = "delete_policy_by_id"
    
    FIND_POLICIES = "find_policies"
    COUNT_POLICIES = "count_policies"
    
    GET_ALL_POLICIES = "get_all_policies"
    GET_POLICY_BY_ID = "get_policy_by_id"
    
    UPDATE_POLICY = "update_policy"
    PATCH_POLICY = "patch_policy"
