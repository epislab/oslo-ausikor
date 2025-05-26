from enum import Enum

class AuthAction(Enum):
    
    LOGIN_USER = "login_user"
    LOGOUT_USER = "logout_user"
    REFRESH_ACCESS_TOKEN = "refresh_access_token"
    GET_STORED_REFRESH_TOKEN = "get_stored_refresh_token"
    