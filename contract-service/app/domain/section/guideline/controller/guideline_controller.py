from app.domain.section.guideline.controller.guideline_factory import GuidelineFactory
from app.domain.section.guideline.model.guideline_action import GuidelineAction


class GuidelineController:
    def __init__(self):
        pass


    def create_new_guideline(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_guideline_by_id(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_guidelines(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.FIND_CONTRACTS, **kwargs)

    def count_guidelines(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.COUNT_CONTRACTS, **kwargs)

    def get_all_guidelines(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_guideline_by_id(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_guideline(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.UPDATE_CONTRACT, **kwargs)

    def patch_guideline(self, **kwargs):
        return GuidelineFactory.create(GuidelineAction.PATCH_CONTRACT, **kwargs)
