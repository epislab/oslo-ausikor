from enum import Enum
import os


class ServiceType(str, Enum):
    ACCOUNT = "account"
    BOARD = "board"
    CHATBOT = "chatbot"
    COVENANT = "covenant"
    ECONOMY = "economy"
    ITEM = "item"
    ORGANIZATION = "organization"

    

# ✅ 환경 변수에서 서비스 URL 가져오기 (Docker Compose 기본값 포함)
ACCOUNT_SERVICE_URL = os.getenv("ACCOUNT_SERVICE_URL", "http://account-service:8001")
BOARD_SERVICE_URL = os.getenv("BOARD_SERVICE_URL", "http://board-service:8002")
CHATBOT_SERVICE_URL = os.getenv("CHATBOT_SERVICE_URL", "http://chatbot-service:8003")
COVENANT_SERVICE_URL = os.getenv("COVENANT_SERVICE_URL", "http://covenant-service:8004")
ECONOMY_SERVICE_URL = os.getenv("ECONOMY_SERVICE_URL", "http://economy-service:8005")
ITEM_SERVICE_URL = os.getenv("ITEM_SERVICE_URL", "http://item-service:8006")
ORGANIZATION_SERVICE_URL = os.getenv("ORGANIZATION_SERVICE_URL", "http://organization-service:8007")


SERVICE_URLS = {
    ServiceType.ACCOUNT: ACCOUNT_SERVICE_URL,
    ServiceType.BOARD: BOARD_SERVICE_URL,
    ServiceType.CHATBOT: CHATBOT_SERVICE_URL,
    ServiceType.COVENANT: COVENANT_SERVICE_URL,
    ServiceType.ECONOMY: ECONOMY_SERVICE_URL,
    ServiceType.ITEM: ITEM_SERVICE_URL,
    ServiceType.ORGANIZATION: ORGANIZATION_SERVICE_URL,
}