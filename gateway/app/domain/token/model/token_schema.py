from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date, datetime



class RefreshAccessTokenResponse(BaseModel):
    access_token: str
    refresh_token: str