from app.domain.auth.model.auth_action import AuthAction
from app.domain.auth.service.login_user import LoginUser
from app.domain.auth.service.logout_user import LogoutUser
from app.domain.auth.service.refresh_access_token import RefreshAccessToken
from app.domain.auth.service.get_stored_refresh_token import GetStoredRefreshToken
from gateway.app.domain.auth.controller.auth_factory import AuthFactory


class TokenFactory:
    
    _strategy_map = {
        
    AuthAction.LOGIN_USER: LoginUser(),
    AuthAction.LOGOUT_USER: LogoutUser(),
    AuthAction.REFRESH_ACCESS_TOKEN: RefreshAccessToken(),
    AuthAction.GET_STORED_REFRESH_TOKEN: GetStoredRefreshToken(),

    }

    @staticmethod
    async def create(strategy, **kwargs):
        instance = AuthFactory._strategy_map[strategy]
        if not instance:
            raise Exception("invalid strategy")
        return instance.create(**kwargs)