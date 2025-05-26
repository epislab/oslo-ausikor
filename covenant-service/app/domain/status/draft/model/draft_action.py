from enum import Enum

class DraftAction(Enum):
    
    CREATE_NEW_DRAFT = "create_new_draft"
    DELETE_DRAFT_BY_ID = "delete_draft_by_id"
    
    FIND_DRAFTS = "find_drafts"
    COUNT_DRAFTS = "count_drafts"
    
    GET_ALL_DRAFTS = "get_all_drafts"
    GET_DRAFT_BY_ID = "get_draft_by_id"
    
    UPDATE_DRAFT = "update_draft"
    PATCH_DRAFT = "patch_draft"
