from sqlalchemy import select, func 
from app.domain.user.model.user_entity import UserEntity



async def find_users(**kwargs):
    
    skip = kwargs.get("skip")
    limit = kwargs.get("limit")
    # condition = kwargs.get("condition")
    # stmt = select(UserEntity).filter_by(**condition).offset(skip).limit(limit)
    # count_stmt = select(func.count()).select_from(UserEntity).filter_by(**condition)
    
    stmt = select(UserEntity).offset(skip).limit(limit)
    count_stmt = select(func.count()).select_from(UserEntity)
    return stmt, count_stmt



