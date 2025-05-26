import logging
from app.domain.user.controller.user_factory import UserFactory
from app.domain.user.model.user_action import UserAction

logger = logging.getLogger("user_controller")

class UserController:
    

    async def create_new_user(self, **kwargs):
        return await UserFactory.create(UserAction.CREATE_NEW_USER, **kwargs)
    
    async def delete_user_by_id(self, **kwargs):
        return await UserFactory.create(UserAction.DELETE_USER_BY_ID,  **kwargs)
    
    async def find_users(self, **kwargs):
        return await UserFactory.create(UserAction.FIND_USERS, **kwargs)

    async def count_users(self, **kwargs):
        return await UserFactory.create(UserAction.COUNT_USERS, **kwargs)
    
    async def update_user(self, **kwargs):
        return await UserFactory.create(UserAction.UPDATE_USER, **kwargs)
    
    async def patch_user(self, **kwargs):
        return await UserFactory.create(UserAction.PATCH_USER, **kwargs)
    
    async def get_all_users(self, **kwargs):
        return await UserFactory.create(UserAction.GET_ALL_USERS, **kwargs)

    async def get_user_by_id(self, **kwargs):
        return await UserFactory.create(UserAction.GET_USER_BY_ID, **kwargs)
    


    
    async def get_user_id(self, **kwargs):
        return await UserFactory.create(UserAction.GET_USER_ID, **kwargs)