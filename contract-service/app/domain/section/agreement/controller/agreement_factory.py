from app.domain.section.agreement.service.agreement_mutation import CreateNewAgreement, DeleteAgreementById
from app.domain.section.agreement.model.agreement_action import AgreementAction
from app.domain.section.agreement.service.agreement_retriever import GetAllAgreements, GetAgreementById, GetAgreementByEmail, GetAgreementsByName
from app.domain.section.agreement.service.agreement_mutation import UpdateAgreement, PatchAgreement, CountAgreements, FindAgreements

class AgreementFactory:
    
    _strategy_map = {
        
    AgreementAction.DELETE_AGREEMENT_BY_ID: DeleteAgreementById(),
    AgreementAction.CREATE_NEW_AGREEMENT: CreateNewAgreement(),
    AgreementAction.UPDATE_AGREEMENT: UpdateAgreement(),
    AgreementAction.PATCH_AGREEMENT: PatchAgreement(),
    AgreementAction.COUNT_AGREEMENTS: CountAgreements(),
    AgreementAction.FIND_AGREEMENTS: FindAgreements(),
    AgreementAction.GET_ALL_AGREEMENTS: GetAllAgreements(),
    AgreementAction.GET_AGREEMENT_BY_ID: GetAgreementById(),

    }

    @staticmethod
    async def create(strategy, **kwargs):
        instance = AgreementFactory._strategy_map[strategy]
        if not instance:
            raise Exception("invalid strategy")
        return instance.create(**kwargs)