from typing import Any, List, Optional
from app.utility.pagination.page_unit import PageUnit
from app.utility.pagination.pagination_schema import Pagination

class PaginationBuilder:
    """Builder Pattern을 사용한 Pagination 객체 생성"""
    
    def __init__(self):
        self.page_unit = PageUnit()
        self._items: List[Any] = []
        self._total: int = 0
        self._limit: int = self.page_unit.default_page_size
        self._offset: int = 0

    def items(self, items: List[Any]) -> 'PaginationBuilder':
        """아이템 목록 설정"""
        self._items = items
        return self

    def total(self, total: int) -> 'PaginationBuilder':
        """전체 아이템 수 설정"""
        self._total = total
        return self

    def limit(self, limit: int) -> 'PaginationBuilder':
        """페이지당 아이템 수 설정"""
        self._limit = limit
        return self

    def offset(self, offset: int) -> 'PaginationBuilder':
        """오프셋 설정"""
        self._offset = offset
        return self

    def page(self, page: int, limit: Optional[int] = None) -> 'PaginationBuilder':
        """페이지 번호로 오프셋 설정 (1부터 시작)"""
        if limit:
            self._limit = limit
        self._offset = (page - 1) * self._limit
        return self

    def use_admin_page_size(self) -> 'PaginationBuilder':
        """관리자 페이지 크기 사용"""
        self._limit = self.page_unit.default_admin_page_size
        return self

    def use_product_list_page_size(self) -> 'PaginationBuilder':
        """상품 목록 페이지 크기 사용"""
        self._limit = self.page_unit.default_product_list_page_size
        return self

    def build(self) -> Pagination:
        """Pagination 객체 생성"""
        return Pagination(
            items=self._items,
            total=self._total,
            limit=self._limit,
            offset=self._offset
        )

