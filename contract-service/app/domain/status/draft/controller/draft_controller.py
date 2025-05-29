from app.domain.status.draft.controller.draft_factory import DraftFactory
from app.domain.status.draft.model.draft_action import DraftAction


class DraftController:
    def __init__(self):
        pass


    def create_new_draft(self, **kwargs):
        return DraftFactory.create(DraftAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_draft_by_id(self, **kwargs):
        return DraftFactory.create(DraftAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_drafts(self, **kwargs):
        return DraftFactory.create(DraftAction.FIND_CONTRACTS, **kwargs)

    def count_drafts(self, **kwargs):
        return DraftFactory.create(DraftAction.COUNT_CONTRACTS, **kwargs)

    def get_all_drafts(self, **kwargs):
        return DraftFactory.create(DraftAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_draft_by_id(self, **kwargs):
        return DraftFactory.create(DraftAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_draft(self, **kwargs):
        return DraftFactory.create(DraftAction.UPDATE_CONTRACT, **kwargs)

    def patch_draft(self, **kwargs):
        return DraftFactory.create(DraftAction.PATCH_CONTRACT, **kwargs)
