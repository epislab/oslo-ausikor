from datetime import datetime, UTC
from sqlalchemy import TIMESTAMP, Column, String, DateTime, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class RejectedEntity(Base):
    """Rejected 테이블 정의"""
    __tablename__ = "rejected"

    rejection_id = Column(String(50), primary_key=True, index=True, doc="거절 ID")
    rejection_title = Column(String(255), nullable=False, doc="거절 제목")
    company_id = Column(String(50), nullable=False, doc="회사 ID")
    user_id = Column(String(50), nullable=False, doc="사용자 ID")
    status = Column(String(50), nullable=False, doc="거절 상태")

    personal_sign = Column(String(255), nullable=True, doc="개인 서명")
    policy_sign = Column(String(255), nullable=True, doc="정책 서명")
    agreement_sign = Column(String(255), nullable=True, doc="계약 동의 서명")
    guideline_sign = Column(String(255), nullable=True, doc="가이드라인 서명")
    survey_sign = Column(String(255), nullable=True, doc="설문 서명")
    employer_sign = Column(String(255), nullable=True, doc="고용주 서명")

    starting_date = Column(DateTime, nullable=True, doc="계약 시작일")  # ✅ String → DateTime 변경
    effective_date = Column(DateTime, nullable=True, doc="계약 발효일")  # ✅ String → DateTime 변경

    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")
    updated_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), onupdate=func.now(), doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(tz=UTC)  # ✅ Python 3.13 최신 스타일