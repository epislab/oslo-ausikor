import threading

from app.foundation.core.config.base_config import BaseConfig

class InicisProvider(BaseConfig):
    """결제 및 배송 관련 설정 (싱글톤 패턴 적용)"""

    _instance = None
    _lock = threading.Lock()

    def __new__(cls):
        with cls._lock:  # ✅ 멀티스레딩 환경에서 동시 접근 방지
            if cls._instance is None:
                cls._instance = super(InicisProvider, cls).__new__(cls)
                cls._instance._initialize()
        return cls._instance

    def _initialize(self):
        """초기화 메서드"""
        self.ini_mid: str = "INIpayTest"
        self.ini_sign_key: str = "SU5JTElURV9UUklQTEVERVNfS0VZU1RS"
        self.ini_api_key: str = "ItEQKi3rY7uvDS8l"
        self.ini_api_iv: str = "HYb3yQ4f65QL89=="

# ✅ 싱글톤 인스턴스 생성
inicis_provider = InicisProvider()