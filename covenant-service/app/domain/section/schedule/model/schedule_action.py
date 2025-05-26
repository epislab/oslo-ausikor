from enum import Enum

class ScheduleAction(Enum):
    
    CREATE_NEW_SCHEDULE = "create_new_schedule"
    DELETE_SCHEDULE_BY_ID = "delete_schedule_by_id"
    
    FIND_SCHEDULES = "find_schedules"
    COUNT_SCHEDULES = "count_schedules"
    
    GET_ALL_SCHEDULES = "get_all_schedules"
    GET_SCHEDULE_BY_ID = "get_schedule_by_id"
    
    UPDATE_SCHEDULE = "update_schedule"
    PATCH_SCHEDULE = "patch_schedule"
