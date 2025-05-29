from datetime import datetime, UTC
from sqlalchemy import Column, String, Text, TIMESTAMP, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class GuidelineEntity(Base):
    __tablename__ = "guideline"

    guideline_id = Column(String(15), primary_key=True, doc="가이드라인 ID")
    
    # ✅ 가이드라인 제목 (guide_title1 ~ guide_title12)
    guide_title1 = Column(Text, nullable=True, doc="가이드 제목 1")
    guide_title2 = Column(Text, nullable=True, doc="가이드 제목 2")
    guide_title3 = Column(Text, nullable=True, doc="가이드 제목 3")
    guide_title4 = Column(Text, nullable=True, doc="가이드 제목 4")
    guide_title5 = Column(Text, nullable=True, doc="가이드 제목 5")
    guide_title6 = Column(Text, nullable=True, doc="가이드 제목 6")
    guide_title7 = Column(Text, nullable=True, doc="가이드 제목 7")
    guide_title8 = Column(Text, nullable=True, doc="가이드 제목 8")
    guide_title9 = Column(Text, nullable=True, doc="가이드 제목 9")
    guide_title10 = Column(Text, nullable=True, doc="가이드 제목 10")
    guide_title11 = Column(Text, nullable=True, doc="가이드 제목 11")
    guide_title12 = Column(Text, nullable=True, doc="가이드 제목 12")

    # ✅ 가이드라인 본문 (guide_content1 ~ guide_content12)
    guide_content1 = Column(Text, nullable=True, doc="가이드 본문 1")
    guide_content2 = Column(Text, nullable=True, doc="가이드 본문 2")
    guide_content3 = Column(Text, nullable=True, doc="가이드 본문 3")
    guide_content4 = Column(Text, nullable=True, doc="가이드 본문 4")
    guide_content5 = Column(Text, nullable=True, doc="가이드 본문 5")
    guide_content6 = Column(Text, nullable=True, doc="가이드 본문 6")
    guide_content7 = Column(Text, nullable=True, doc="가이드 본문 7")
    guide_content8 = Column(Text, nullable=True, doc="가이드 본문 8")
    guide_content9 = Column(Text, nullable=True, doc="가이드 본문 9")
    guide_content10 = Column(Text, nullable=True, doc="가이드 본문 10")
    guide_content11 = Column(Text, nullable=True, doc="가이드 본문 11")
    guide_content12 = Column(Text, nullable=True, doc="가이드 본문 12")

    # ✅ `created_at`은 DB에서 자동 생성
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")
    
    # ✅ `updated_at`은 FastAPI에서 직접 갱신
    updated_at = Column(TIMESTAMP, nullable=False, doc="수정 날짜")
    # updated_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), onupdate=func.now(), doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(tz=UTC)  # ✅ Python 3.13 최신 스타일