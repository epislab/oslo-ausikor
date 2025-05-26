from app.domain.status.rejected.controller.rejected_factory import RejectedFactory
from app.domain.status.rejected.model.rejected_action import RejectedAction


class RejectedController:
    def __init__(self):
        pass


    def create_new_rejected(self, **kwargs):
        return RejectedFactory.create(RejectedAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_rejected_by_id(self, **kwargs):
        return RejectedFactory.create(RejectedAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_rejecteds(self, **kwargs):
        return RejectedFactory.create(RejectedAction.FIND_CONTRACTS, **kwargs)

    def count_rejecteds(self, **kwargs):
        return RejectedFactory.create(RejectedAction.COUNT_CONTRACTS, **kwargs)

    def get_all_rejecteds(self, **kwargs):
        return RejectedFactory.create(RejectedAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_rejected_by_id(self, **kwargs):
        return RejectedFactory.create(RejectedAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_rejected(self, **kwargs):
        return RejectedFactory.create(RejectedAction.UPDATE_CONTRACT, **kwargs)

    def patch_rejected(self, **kwargs):
        return RejectedFactory.create(RejectedAction.PATCH_CONTRACT, **kwargs)

