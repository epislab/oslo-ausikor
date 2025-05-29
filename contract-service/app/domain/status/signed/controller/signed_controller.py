from app.domain.status.signed.controller.signed_factory import SignedFactory
from app.domain.status.signed.model.signed_action import SignedAction


class SignedController:
    def __init__(self):
        pass


    def create_new_signed(self, **kwargs):
        return SignedFactory.create(SignedAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_signed_by_id(self, **kwargs):
        return SignedFactory.create(SignedAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_signeds(self, **kwargs):
        return SignedFactory.create(SignedAction.FIND_CONTRACTS, **kwargs)

    def count_signeds(self, **kwargs):
        return SignedFactory.create(SignedAction.COUNT_CONTRACTS, **kwargs)

    def get_all_signeds(self, **kwargs):
        return SignedFactory.create(SignedAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_signed_by_id(self, **kwargs):
        return SignedFactory.create(SignedAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_signed(self, **kwargs):
        return SignedFactory.create(SignedAction.UPDATE_CONTRACT, **kwargs)

    def patch_signed(self, **kwargs):
        return SignedFactory.create(SignedAction.PATCH_CONTRACT, **kwargs)
