from gateway.app.domain.token.controller.token_factory import TokenFactory
from gateway.app.domain.token.model.token_action import TokenAction



class TokenController:
    """토큰 컨트롤러"""
    
        
    
    async def refresh_access_token(self, **kwargs):
        return await TokenFactory.create(TokenAction.REFRESH_ACCESS_TOKEN, **kwargs)

    async def login(self, **kwargs):
        return await TokenFactory.create(TokenAction.LOGIN, **kwargs)
    
    async def logout(self, **kwargs):
        return await TokenFactory.create(TokenAction.LOGOUT, **kwargs)
    
    async def get_stored_refresh_token(self, **kwargs):
        return await TokenFactory.create(TokenAction.GET_STORED_REFRESH_TOKEN, **kwargs)