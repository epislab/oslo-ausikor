from app.domain.user.service.user_mutation import CreateNewUser, DeleteUserById
from app.domain.user.model.user_action import UserAction
from app.domain.user.service.user_retriever import GetAllUsers, GetUserById, GetUserByEmail, GetUsersByName
from app.domain.user.service.user_mutation import UpdateUser, PatchUser, CountUsers, FindUsers

class UserFactory:
    
    _strategy_map = {
        
    UserAction.DELETE_USER_BY_ID: DeleteUserById(),
    UserAction.CREATE_NEW_USER: CreateNewUser(),
    UserAction.UPDATE_USER: UpdateUser(),
    UserAction.PATCH_USER: PatchUser(),
    UserAction.COUNT_USERS: CountUsers(),
    UserAction.FIND_USERS: FindUsers(),
    UserAction.GET_USERS_BY_NAME: GetUsersByName(),
    UserAction.GET_USER_BY_EMAIL: GetUserByEmail(),
    UserAction.GET_ALL_USERS: GetAllUsers(),
    UserAction.GET_USER_BY_ID: GetUserById(),

    }

    @staticmethod
    async def create(strategy, **kwargs):
        instance = UserFactory._strategy_map[strategy]
        if not instance:
            raise Exception("invalid strategy")
        return instance.create(**kwargs)