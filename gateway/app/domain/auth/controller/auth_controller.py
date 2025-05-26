from fastapi import APIRouter, HTTPException, Query

from typing import List

from app.domain.auth.controller.auth_factory import AuthFactory
from app.domain.auth.model.auth_action import AuthAction

class AuthController:
    def __init__(self):
        pass


    async def login_user(self, **kwargs):
        return await AuthFactory.create(AuthAction.LOGIN_USER, **kwargs)

    async def logout_user(self, **kwargs):
        return await AuthFactory.create(AuthAction.LOGOUT_USER, **kwargs)

