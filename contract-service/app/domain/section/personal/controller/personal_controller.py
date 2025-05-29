from app.domain.section.personal.controller.personal_factory import PersonalFactory
from app.domain.section.personal.model.personal_action import PersonalAction


class PersonalController:
    def __init__(self):
        pass


    def create_new_personal(self, **kwargs):
        return PersonalFactory.create(PersonalAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_personal_by_id(self, **kwargs):
        return PersonalFactory.create(PersonalAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_personals(self, **kwargs):
        return PersonalFactory.create(PersonalAction.FIND_CONTRACTS, **kwargs)

    def count_personals(self, **kwargs):
        return PersonalFactory.create(PersonalAction.COUNT_CONTRACTS, **kwargs)

    def get_all_personals(self, **kwargs):
        return PersonalFactory.create(PersonalAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_personal_by_id(self, **kwargs):
        return PersonalFactory.create(PersonalAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_personal(self, **kwargs):
        return PersonalFactory.create(PersonalAction.UPDATE_CONTRACT, **kwargs)

    def patch_personal(self, **kwargs):
        return PersonalFactory.create(PersonalAction.PATCH_CONTRACT, **kwargs)
