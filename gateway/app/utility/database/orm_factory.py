import threading
from sqlalchemy.ext.declarative import declarative_base

from gateway.app.domain.auth.model.auth_entity import AuthEntity

Base = declarative_base()

class ORMFactory:
    """ORM 테이블 모델을 초기화하는 싱글톤 + 팩토리 클래스"""
    
    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        with cls._lock:
            if cls._instance is None:
                cls._instance = super().__new__(cls)
                cls._instance._initialize()
        return cls._instance

    def _initialize(self):
        """ORM 테이블을 등록"""
        self.models = []
        self.register(AuthEntity)  # ✅ ORM 엔티티 등록

    def register(self, model):
        """새로운 ORM 모델을 등록"""
        if model not in self.models:
            self.models.append(model)

    def get_models(self):
        """등록된 모든 ORM 모델을 반환"""
        return self.models

# ✅ 싱글톤 인스턴스 생성
orm_factory = ORMFactory()