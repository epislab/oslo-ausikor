from enum import Enum

class GuidelineAction(Enum):
    
    CREATE_NEW_GUIDELINE = "create_new_guideline"
    DELETE_GUIDELINE_BY_ID = "delete_guideline_by_id"
    
    FIND_GUIDELINES = "find_guidelines"
    COUNT_GUIDELINES = "count_guidelines"
    
    GET_ALL_GUIDELINES = "get_all_guidelines"
    GET_GUIDELINE_BY_ID = "get_guideline_by_id"
    
    UPDATE_GUIDELINE = "update_guideline"
    PATCH_GUIDELINE = "patch_guideline"
