from datetime import UTC, datetime
from sqlalchemy import TIMESTAMP, Column, Integer, String, DateTime, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class TokenEntity(Base):
    __tablename__ = "user"

    user_id = Column(String, primary_key=True, doc="개인정보동의내역id")
    refresh_token = Column(String, nullable=False)
    
    
    __mapper_args__ = {
        "polymorphic_identity": "user",
        
    }


