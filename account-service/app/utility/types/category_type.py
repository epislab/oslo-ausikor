from enum import Enum

class CategoryType(Enum):
    # 공통 전략
    ACCOUNT = "account_category"
    BOARD = "board_category"
    COVENANT = "covenant_category"
    FINANCE = "finance_category"
    ITEM = "item_category"
    ORGANIZATION = "organization_category"

    # 개별 전략