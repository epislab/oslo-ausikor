from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func 

from app.domain.section.schedule.model.schedule_entity import ScheduleEntity


async def count_schedules(**kwargs):
    
    return select(func.count()).select_from(ScheduleEntity)