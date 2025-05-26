

from asyncio import Lock
from gateway.app.foundation.core.config.base_config import BaseConfig


class PageUnit(BaseConfig):
    """페이지네이션 기본값 관리 (싱글톤 패턴 적용)"""

    _instance = None
    _lock = Lock()  # 멀티스레드 환경에서도 안전한 인스턴스 생성을 위한 락

    def __new__(cls):
        """싱글톤 인스턴스 생성"""
        if not cls._instance:
            with cls._lock:
                if not cls._instance:
                    cls._instance = super().__new__(cls)
                    cls._instance._initialize()
        return cls._instance

    def _initialize(self):
        """페이지네이션 기본값 초기화"""
        self.default_block_number = 1
        self.default_block_size = 10
        self.default_page_number = 1
        self.default_admin_page_size = 15
        self.default_page_size = 10
        self.default_limit = 120
        self.default_product_list_page_size = 100