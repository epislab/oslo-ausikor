from app.domain.section.policy.controller.policy_factory import PolicyFactory
from app.domain.section.policy.model.policy_action import PolicyAction


class PolicyController:
    def __init__(self):
        pass


    def create_new_policy(self, **kwargs):
        return PolicyFactory.create(PolicyAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_policy_by_id(self, **kwargs):
        return PolicyFactory.create(PolicyAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_policies(self, **kwargs):
        return PolicyFactory.create(PolicyAction.FIND_CONTRACTS, **kwargs)

    def count_policies(self, **kwargs):
        return PolicyFactory.create(PolicyAction.COUNT_CONTRACTS, **kwargs)

    def get_all_policies(self, **kwargs):
        return PolicyFactory.create(PolicyAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_policy_by_id(self, **kwargs):
        return PolicyFactory.create(PolicyAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_policy(self, **kwargs):
        return PolicyFactory.create(PolicyAction.UPDATE_CONTRACT, **kwargs)

    def patch_policy(self, **kwargs):
        return PolicyFactory.create(PolicyAction.PATCH_CONTRACT, **kwargs)
