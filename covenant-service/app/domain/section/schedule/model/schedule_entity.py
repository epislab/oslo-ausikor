from datetime import datetime, UTC
from sqlalchemy import Column, String, Text, TIMESTAMP, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class ScheduleEntity(Base):
    __tablename__ = "schedule"

    schedule_id = Column(String(15), primary_key=True, doc="스케줄 ID")
    starting_date = Column(String(10), nullable=True, doc="시작 날짜")
    property_name = Column(String(100), nullable=True, doc="자산 이름")
    property_address = Column(String(255), nullable=True, doc="자산 주소")

    piecework_rate1 = Column(Text, nullable=True, doc="단가 1")
    piecework_rate2 = Column(Text, nullable=True, doc="단가 2")
    piecework_rate3 = Column(Text, nullable=True, doc="단가 3")
    piecework_rate4 = Column(Text, nullable=True, doc="단가 4")
    piecework_rate5 = Column(Text, nullable=True, doc="단가 5")
    piecework_rate6 = Column(Text, nullable=True, doc="단가 6")
    piecework_rate7 = Column(Text, nullable=True, doc="단가 7")
    piecework_rate8 = Column(Text, nullable=True, doc="단가 8")
    piecework_rate9 = Column(Text, nullable=True, doc="단가 9")

    piecework_content1 = Column(Text, nullable=True, doc="작업 내용 1")
    piecework_content2 = Column(Text, nullable=True, doc="작업 내용 2")
    piecework_content3 = Column(Text, nullable=True, doc="작업 내용 3")
    piecework_content4 = Column(Text, nullable=True, doc="작업 내용 4")
    piecework_content5 = Column(Text, nullable=True, doc="작업 내용 5")
    piecework_content6 = Column(Text, nullable=True, doc="작업 내용 6")
    piecework_content7 = Column(Text, nullable=True, doc="작업 내용 7")
    piecework_content8 = Column(Text, nullable=True, doc="작업 내용 8")
    piecework_content9 = Column(Text, nullable=True, doc="작업 내용 9")

    # ✅ `created_at`은 DB에서 자동 생성
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")

    # ✅ `updated_at`은 FastAPI에서 직접 갱신
    updated_at = Column(TIMESTAMP, nullable=False, doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(UTC)