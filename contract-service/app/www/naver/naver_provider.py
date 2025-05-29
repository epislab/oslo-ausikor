import os
from threading import Lock

from app.foundation.core.config.base_config import BaseConfig

class NaverProvider(BaseConfig):
    """네이버 API 설정 (싱글톤 패턴 적용)"""

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
        self.naver_token_url = "https://nid.naver.com/oauth2.0/token"
        self.naver_grant_type = "authorization_code"
        self.naver_client_id = os.getenv("NAVER_CLIENT_ID")
        self.naver_client_secret = os.getenv("NAVER_CLIENT_SECRET")
        self.naver_service_provider = "NAVER"
        self.naver_user_info_url = "https://openapi.naver.com/v1/nid/me"


# ✅ 싱글톤 인스턴스 생성
naver_provider = NaverProvider()