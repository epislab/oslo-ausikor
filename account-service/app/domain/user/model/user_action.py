from enum import Enum

class UserAction(Enum):
    CREATE_NEW_USER = "create_new_user"
    DELETE_USER_BY_ID = "delete_user_by_id"
    UPDATE_USER = "update_user"
    PATCH_USER = "patch_user"
    COUNT_USERS = "count_users"
    FIND_USERS = "find_users"
    GET_USERS_BY_NAME = "get_users_by_name"
    GET_USER_BY_EMAIL = "get_user_by_email"
    GET_ALL_USERS = "get_all_users"
    GET_USER_BY_ID = "get_user_by_id"
    