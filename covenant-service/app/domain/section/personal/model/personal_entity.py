from datetime import datetime, UTC
from sqlalchemy import Column, String, TIMESTAMP, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class PersonalEntity(Base):
    __tablename__ = "personal"

    personal_id = Column(String(15), primary_key=True, doc="개인 정보 ID")
    nationality = Column(String(100), nullable=True, doc="국적")
    passport_number = Column(String(50), nullable=True, doc="여권 번호")
    tax_file_number = Column(String(50), nullable=True, doc="세금 파일 번호")
    visa_grant_number = Column(String(50), nullable=True, doc="비자 승인 번호")
    visa_expiry_date = Column(String(15), nullable=True, doc="비자 만료일")
    emergency_name = Column(String(100), nullable=True, doc="긴급 연락처 이름")
    emergency_phone = Column(String(50), nullable=True, doc="긴급 연락처 전화번호")
    fund_name = Column(String(100), nullable=True, doc="연금 기금 이름")
    bank_name = Column(String(100), nullable=True, doc="은행 이름")
    account_owner = Column(String(255), nullable=True, doc="계좌 소유자")
    bsb_number = Column(String(50), nullable=True, doc="BSB 번호")
    account_number = Column(String(50), nullable=True, doc="계좌 번호")

    # ✅ `created_at`은 DB에서 자동 생성
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")

    # ✅ `updated_at`은 FastAPI에서 직접 갱신
    updated_at = Column(TIMESTAMP, nullable=False, doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(UTC)