from datetime import datetime, UTC
from sqlalchemy import Column, String, Text, TIMESTAMP, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class PolicyEntity(Base):
    __tablename__ = "policy"

    policy_id = Column(String(15), primary_key=True, doc="정책 ID")

    policy1_title = Column(String(500), nullable=True, doc="정책 1 제목")
    policy2_title = Column(String(500), nullable=True, doc="정책 2 제목")
    policy3_title = Column(String(500), nullable=True, doc="정책 3 제목")
    policy4_title = Column(String(500), nullable=True, doc="정책 4 제목")
    policy5_title = Column(String(500), nullable=True, doc="정책 5 제목")
    policy6_title = Column(String(500), nullable=True, doc="정책 6 제목")
    policy7_title = Column(String(500), nullable=True, doc="정책 7 제목")
    policy8_title = Column(String(500), nullable=True, doc="정책 8 제목")
    policy9_title = Column(String(500), nullable=True, doc="정책 9 제목")
    policy10_title = Column(String(500), nullable=True, doc="정책 10 제목")

    policy1 = Column(Text, nullable=True, doc="정책 1 내용")
    policy2 = Column(Text, nullable=True, doc="정책 2 내용")
    policy3 = Column(Text, nullable=True, doc="정책 3 내용")
    policy4 = Column(Text, nullable=True, doc="정책 4 내용")
    policy5 = Column(Text, nullable=True, doc="정책 5 내용")
    policy6 = Column(Text, nullable=True, doc="정책 6 내용")
    policy7 = Column(Text, nullable=True, doc="정책 7 내용")
    policy8 = Column(Text, nullable=True, doc="정책 8 내용")
    policy9 = Column(Text, nullable=True, doc="정책 9 내용")
    policy10 = Column(Text, nullable=True, doc="정책 10 내용")

    # ✅ `created_at`은 DB에서 자동 생성
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")

    # ✅ `updated_at`은 FastAPI에서 직접 갱신
    updated_at = Column(TIMESTAMP, nullable=False, doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(UTC)