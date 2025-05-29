from app.domain.section.survey.controller.survey_factory import SurveyFactory
from app.domain.section.survey.model.survey_action import SurveyAction


class SurveyController:
    def __init__(self):
        pass


    def create_new_survey(self, **kwargs):
        return SurveyFactory.create(SurveyAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_survey_by_id(self, **kwargs):
        return SurveyFactory.create(SurveyAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_surveys(self, **kwargs):
        return SurveyFactory.create(SurveyAction.FIND_CONTRACTS, **kwargs)

    def count_surveys(self, **kwargs):
        return SurveyFactory.create(SurveyAction.COUNT_CONTRACTS, **kwargs)

    def get_all_surveys(self, **kwargs):
        return SurveyFactory.create(SurveyAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_survey_by_id(self, **kwargs):
        return SurveyFactory.create(SurveyAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_survey(self, **kwargs):
        return SurveyFactory.create(SurveyAction.UPDATE_CONTRACT, **kwargs)

    def patch_survey(self, **kwargs):
        return SurveyFactory.create(SurveyAction.PATCH_CONTRACT, **kwargs)
