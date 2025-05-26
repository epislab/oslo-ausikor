from enum import Enum

class PersonalAction(Enum):
    
    CREATE_NEW_PERSONAL = "create_new_personal"
    DELETE_PERSONAL_BY_ID = "delete_personal_by_id"
    
    FIND_PERSONALS = "find_personals"
    COUNT_PERSONALS = "count_personals"
    
    GET_ALL_PERSONALS = "get_all_personals"
    GET_PERSONAL_BY_ID = "get_personal_by_id"
    
    UPDATE_PERSONAL = "update_personal"
    PATCH_PERSONAL = "patch_personal"
