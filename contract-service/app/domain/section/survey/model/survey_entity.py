from datetime import UTC, datetime
from sqlalchemy import TIMESTAMP, Column, String, Text, func
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class SurveyEntity(Base):
    __tablename__ = "survey"

    survey_id = Column(String, primary_key=True, doc="계약서 서베이 섹션")
    have_disease = Column(String(3), nullable=True, doc="질병 여부")
    have_medications = Column(String(3), nullable=True, doc="약물 복용 여부")
    have_surgeries = Column(String(3), nullable=True, doc="수술 경험 여부")
    have_injuries = Column(String(3), nullable=True, doc="부상 경험 여부")
    have_limitations = Column(String(3), nullable=True, doc="신체적 제한 여부")
    have_stress = Column(String(3), nullable=True, doc="스트레스 여부")
    have_counseling = Column(String(3), nullable=True, doc="상담 경험 여부")
    know_eap = Column(String(3), nullable=True, doc="EAP(근로자 지원 프로그램) 인지 여부")
    know_policies = Column(String(3), nullable=True, doc="정책 인지 여부")
    have_training = Column(String(3), nullable=True, doc="트레이닝 경험 여부")
    feel_comfortable = Column(String(3), nullable=True, doc="편안함 정도")
    bee_stings = Column(String(3), nullable=True, doc="벌침 알레르기 여부")
    have_epilepsy = Column(String(3), nullable=True, doc="간질 여부")
    have_diabetes = Column(String(3), nullable=True, doc="당뇨병 여부")
    have_pregnant = Column(String(3), nullable=True, doc="임신 여부")
    have_blood_pressure = Column(String(3), nullable=True, doc="고혈압 여부")

    other_allergies = Column(Text, nullable=True, doc="기타 알레르기 정보")
    additional_information = Column(Text, nullable=True, doc="추가 정보")

    # ✅ `created_at`은 DB에서 자동 생성
    created_at = Column(TIMESTAMP, nullable=False, server_default=func.now(), doc="생성 날짜")

    # ✅ `updated_at`은 FastAPI에서 직접 갱신
    updated_at = Column(TIMESTAMP, nullable=False, doc="수정 날짜")

    def update_timestamp(self):
        """FastAPI에서 `updated_at`을 직접 갱신하는 메서드"""
        self.updated_at = datetime.now(UTC)