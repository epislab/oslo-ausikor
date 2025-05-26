import os
from threading import Lock

from app.foundation.core.config.base_config import BaseConfig


class S3Provider(BaseConfig):
    """외부 클라우드 및 API 연동 설정 (싱글톤 패턴 적용)"""

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
        """S3 설정 초기화"""
        self.s3_bucket_name = os.getenv("S3_BUCKET_NAME")
        self.s3_region_name = os.getenv("S3_REGION_NAME")
        self.s3_access_key = os.getenv("S3_ACCESS_KEY")
        self.s3_secret_key = os.getenv("S3_SECRET_KEY")
        self.s3_prefix = os.getenv("S3_PREFIX")


# ✅ 싱글톤 인스턴스 생성
s3_provider = S3Provider()