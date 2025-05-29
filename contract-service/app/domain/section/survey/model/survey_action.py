from enum import Enum

class SurveyAction(Enum):
    
    CREATE_NEW_SURVEY = "create_new_survey"
    DELETE_SURVEY_BY_ID = "delete_survey_by_id"
    
    FIND_SURVEYS = "find_surveys"
    COUNT_SURVEYS = "count_surveys"
    
    GET_ALL_SURVEYS = "get_all_surveys"
    GET_SURVEY_BY_ID = "get_survey_by_id"
    
    UPDATE_SURVEY = "update_survey"
    PATCH_SURVEY = "patch_survey"
