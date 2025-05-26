from app.domain.section.schedule.controller.schedule_factory import ScheduleFactory
from app.domain.section.schedule.model.schedule_action import ScheduleAction


class ScheduleController:
    def __init__(self):
        pass


    def create_new_schedule(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.CREATE_NEW_CONTRACT, **kwargs)
    
    def delete_schedule_by_id(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.DELETE_CONTRACT_BY_ID, **kwargs)

    def find_schedules(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.FIND_CONTRACTS, **kwargs)

    def count_schedules(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.COUNT_CONTRACTS, **kwargs)

    def get_all_schedules(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.GET_ALL_CONTRACTS, **kwargs)
    
    def get_schedule_by_id(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.GET_CONTRACT_BY_ID, **kwargs)
    
    def update_schedule(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.UPDATE_CONTRACT, **kwargs)

    def patch_schedule(self, **kwargs):
        return ScheduleFactory.create(ScheduleAction.PATCH_CONTRACT, **kwargs)
