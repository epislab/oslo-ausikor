import os
from threading import Lock

from app.foundation.core.config.base_config import BaseConfig

class KakaoProvider(BaseConfig):
    """카카오 API 설정 (싱글톤 패턴 적용)"""

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
        self.kakao_token_url = "https://kauth.kakao.com/oauth/token"
        self.kakao_grant_type = "authorization_code"
        self.kakao_client_id = os.getenv("KAKAO_CLIENT_ID")
        self.kakao_redirect_uri = "http://127.0.0.1:3000/authors/sns/kakao"
        self.kakao_user_info_url = "https://kapi.kakao.com/v2/user/me"
        self.kakao_logout_url = "https://kapi.kakao.com/v1/user/logout"
        self.kakao_target_id_type = "user_id"


# ✅ 싱글톤 인스턴스 생성
kakao_provider = KakaoProvider()