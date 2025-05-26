from app.domain.section.agreement.controller.agreement_factory import AgreementFactory
from app.domain.section.agreement.model.agreement_action import AgreementAction


class AgreementController:
    def __init__(self):
        pass


    def create_new_agreement(self, **kwargs):
        return AgreementFactory.create(AgreementAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_agreement_by_id(self, **kwargs):
        return AgreementFactory.create(AgreementAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_agreements(self, **kwargs):
        return AgreementFactory.create(AgreementAction.FIND_CONTRACTS, **kwargs)

    def count_agreements(self, **kwargs):
        return AgreementFactory.create(AgreementAction.COUNT_CONTRACTS, **kwargs)

    def get_all_agreements(self, **kwargs):
        return AgreementFactory.create(AgreementAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_agreement_by_id(self, **kwargs):
        return AgreementFactory.create(AgreementAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_agreement(self, **kwargs):
        return AgreementFactory.create(AgreementAction.UPDATE_CONTRACT, **kwargs)

    def patch_agreement(self, **kwargs):
        return AgreementFactory.create(AgreementAction.PATCH_CONTRACT, **kwargs)