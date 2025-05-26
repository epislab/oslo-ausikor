from datetime import datetime, UTC
from sqlalchemy import TIMESTAMP, Column, String, DateTime, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class ContractEntity(Base):
    """Contract 테이블 정의"""
    __tablename__ = "contract"

    contract_id = Column(String, primary_key=True, index=True, doc="계약 ID")
    contract_title = Column(String, nullable=False, doc="계약 제목")
    company_id = Column(String, nullable=False, doc="회사 ID")
    user_id = Column(String, nullable=False, doc="사용자 ID")
    status = Column(String, nullable=False, doc="계약 상태")

    personal_sign = Column(String, nullable=True, doc="개인 서명")
    policy_sign = Column(String, nullable=True, doc="정책 서명")
    agreement_sign = Column(String, nullable=True, doc="계약 동의 서명")
    guideline_sign = Column(String, nullable=True, doc="가이드라인 서명")
    survey_sign = Column(String, nullable=True, doc="설문 서명")
    employer_sign = Column(String, nullable=True, doc="고용주 서명")

    starting_date = Column(DateTime, nullable=True, doc="계약 시작일")
    effective_date = Column(DateTime, nullable=True, doc="계약 발효일")
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")
    updated_at = Column(TIMESTAMP, nullable=False, doc="수정 날짜")  # ✅ FastAPI에서 직접 갱신
    
    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(UTC)