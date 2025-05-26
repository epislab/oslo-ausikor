from app.domain.status.pending.controller.pending_factory import PendingFactory
from app.domain.status.pending.model.pending_action import PendingAction


class PendingController:
    def __init__(self):
        pass


    def create_new_pending(self, **kwargs):
        return PendingFactory.create(PendingAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_pending_by_id(self, **kwargs):
        return PendingFactory.create(PendingAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_pendings(self, **kwargs):
        return PendingFactory.create(PendingAction.FIND_CONTRACTS, **kwargs)

    def count_pendings(self, **kwargs):
        return PendingFactory.create(PendingAction.COUNT_CONTRACTS, **kwargs)

    def get_all_pendings(self, **kwargs):
        return PendingFactory.create(PendingAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_pending_by_id(self, **kwargs):
        return PendingFactory.create(PendingAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_pending(self, **kwargs):
        return PendingFactory.create(PendingAction.UPDATE_CONTRACT, **kwargs)

    def patch_pending(self, **kwargs):
        return PendingFactory.create(PendingAction.PATCH_CONTRACT, **kwargs)
