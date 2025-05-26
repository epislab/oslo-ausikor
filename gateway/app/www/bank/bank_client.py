from threading import Lock

from app.foundation.core.config.base_config import BaseConfig

class BankProvider(BaseConfig):
    """무통장입금 계좌 정보 (싱글톤 패턴 적용)"""

    _instance = None
    _lock = Lock()

    def __new__(cls):
        with cls._lock:
            if not cls._instance:
                cls._instance = super().__new__(cls)
                cls._instance.hr_account_bank = "국민은행"
                cls._instance.hr_account_number = "522337-01-005496"
                cls._instance.hr_account_holder = "장영석"
                cls._instance.default_due_days = 15
        return cls._instance


# ✅ 싱글톤 인스턴스 생성
bank_provider = BankProvider()