import os
from threading import Lock

from app.foundation.core.config.base_config import BaseConfig

class SlackProvider(BaseConfig):
    """SLACK Webhook URL 설정 (싱글톤 패턴 적용)"""

    _instance = None
    _lock = Lock()  # ✅ 멀티스레드 환경에서 안전한 싱글톤 구현

    def __new__(cls):
        """싱글톤 인스턴스 생성"""
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super().__new__(cls)
                    cls._instance._initialize()
        return cls._instance

    def _initialize(self):
        """SLACK 설정 초기화"""
        self.slack_webhook_url = os.getenv("SLACK_WEBHOOK_URL")


# ✅ 싱글톤 인스턴스 생성
slack_provider = SlackProvider()