import os
from threading import Lock

from app.foundation.core.config.base_config import BaseConfig

class GoogleProvider(BaseConfig):
    """Google 설정 (싱글톤 패턴 적용)"""

    _instance = None
    _lock = Lock()  # ✅ 멀티스레드 환경에서도 안전한 인스턴스 생성을 위한 락

    def __new__(cls):
        """싱글톤 인스턴스 생성"""
        if not cls._instance:
            with cls._lock:  # ✅ 멀티스레드 환경에서 안전한 인스턴스 생성
                if not cls._instance:
                    cls._instance = super().__new__(cls)
                    cls._instance._initialize()
        return cls._instance

    def _initialize(self):
        """환경 변수 값을 로드하여 설정 초기화"""
        self.google_recaptcha_url = "https://www.google.com/recaptcha/api/siteverify"
        self.google_recaptcha_site_key = os.getenv("GOOGLE_RECAPTCHA_SITE_KEY")
        self.google_recaptcha_secret_key = os.getenv("GOOGLE_RECAPTCHA_SECRET_KEY")


# ✅ 싱글톤 인스턴스 생성
google_provider = GoogleProvider()