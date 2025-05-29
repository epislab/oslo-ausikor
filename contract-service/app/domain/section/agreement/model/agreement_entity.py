from datetime import datetime, UTC
from sqlalchemy import TIMESTAMP, Column, String, Text, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class AgreementEntity(Base):
    """Agreement 테이블 정의"""
    __tablename__ = "agreement"

    agreement_id = Column(String(12), primary_key=True, index=True, doc="Agreement ID")
    description = Column(Text, nullable=True, doc="설명")
    
    agreement1 = Column(Text, nullable=True, doc="약관 1")
    agreement2 = Column(Text, nullable=True, doc="약관 2")
    agreement3 = Column(Text, nullable=True, doc="약관 3")
    agreement4 = Column(Text, nullable=True, doc="약관 4")
    agreement5 = Column(Text, nullable=True, doc="약관 5")
    agreement6 = Column(Text, nullable=True, doc="약관 6")
    agreement7 = Column(Text, nullable=True, doc="약관 7")
    agreement8 = Column(Text, nullable=True, doc="약관 8")
    agreement9 = Column(Text, nullable=True, doc="약관 9")
    agreement10 = Column(Text, nullable=True, doc="약관 10")

    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")
    updated_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), onupdate=func.now(), doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(tz=UTC)  # ✅ Python 3.13 최신 스타일