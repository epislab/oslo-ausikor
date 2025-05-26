import os
from threading import Lock

from gateway.app.utility.config.base_config import BaseConfig


class DbInstance(BaseConfig):
    """내부 애플리케이션 설정 (싱글톤 패턴 적용)"""

    _instance = None
    _lock = Lock()  # ✅ 멀티스레드 환경에서도 안전하게 인스턴스를 생성하도록 락 사용

    def __new__(cls):
        """싱글톤 인스턴스 생성"""
        if not cls._instance:
            with cls._lock:  # ✅ 멀티스레드 환경에서 안전하게 인스턴스 생성
                if not cls._instance:
                    cls._instance = super().__new__(cls)
                    cls._instance._initialize()
        return cls._instance

    def _initialize(self):
        """환경 변수 값을 로드하여 설정 초기화"""
        self.db_hostname = os.getenv("DB_HOSTNAME")
        self.db_username = os.getenv("DB_USERNAME")
        self.db_password = os.getenv("DB_PASSWORD")
        self.db_port = int(os.getenv("DB_PORT", 3306))
        self.db_database = os.getenv("DB_DATABASE")
        self.db_charset = os.getenv("DB_CHARSET", "utf8mb4")
        self.db_url = f"mysql+pymysql://{self.db_username}:{self.db_password}@{self.db_hostname}:{self.db_port}/{self.db_database}"


# ✅ 싱글톤 인스턴스 생성
db_instance = DbInstance()