from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import date, datetime



class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):

    email: str
    created_at: datetime
    access_token: str
    refresh_token: str

class RefreshAccessTokenResponse(BaseModel):
    access_token: str
    refresh_token: str