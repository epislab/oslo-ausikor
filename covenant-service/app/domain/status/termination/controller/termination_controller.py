from app.domain.status.termination.controller.termination_factory import TerminationFactory
from app.domain.status.termination.model.termination_action import TerminationAction


class TerminationController:
    def __init__(self):
        pass


    def create_new_termination(self, **kwargs):
        return TerminationFactory.create(TerminationAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_termination_by_id(self, **kwargs):
        return TerminationFactory.create(TerminationAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_terminations(self, **kwargs):
        return TerminationFactory.create(TerminationAction.FIND_CONTRACTS, **kwargs)

    def count_terminations(self, **kwargs):
        return TerminationFactory.create(TerminationAction.COUNT_CONTRACTS, **kwargs)

    def get_all_terminations(self, **kwargs):
        return TerminationFactory.create(TerminationAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_termination_by_id(self, **kwargs):
        return TerminationFactory.create(TerminationAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_termination(self, **kwargs):
        return TerminationFactory.create(TerminationAction.UPDATE_CONTRACT, **kwargs)

    def patch_termination(self, **kwargs):
        return TerminationFactory.create(TerminationAction.PATCH_CONTRACT, **kwargs)
