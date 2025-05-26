from enum import Enum

class TokenAction(Enum):
    
    REFRESH_ACCESS_TOKEN = "refresh_access_token"
    GET_STORED_REFRESH_TOKEN = "get_stored_refresh_token"
    