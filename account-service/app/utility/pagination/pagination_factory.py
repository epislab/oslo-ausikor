from typing import Any, List, Optional
from app.utility.pagination.pagination_builder import PaginationBuilder
from app.utility.pagination.pagination_schema import Pagination

class PaginationFactory:
    """Factory Pattern을 사용한 Pagination 생성 (Builder 패턴 활용)"""
    
    @staticmethod
    def create_from_page(items: List[Any], total: int, page: int, limit: int = None) -> Pagination:
        """페이지 번호로 Pagination 생성"""
        builder = PaginationBuilder()
        if limit:
            return builder.items(items).total(total).page(page, limit).build()
        else:
            return builder.items(items).total(total).page(page).build()

    @staticmethod
    def create_from_offset(items: List[Any], total: int, offset: int, limit: int = None) -> Pagination:
        """오프셋으로 Pagination 생성"""
        builder = PaginationBuilder()
        if limit:
            return builder.items(items).total(total).offset(offset).limit(limit).build()
        else:
            return builder.items(items).total(total).offset(offset).build()

    @staticmethod
    def create_empty(limit: int = None) -> Pagination:
        """빈 Pagination 생성"""
        builder = PaginationBuilder()
        if limit:
            return builder.items([]).total(0).limit(limit).build()
        else:
            return builder.items([]).total(0).build()

    @staticmethod
    def create_admin_pagination(items: List[Any], total: int, page: int = 1) -> Pagination:
        """관리자용 Pagination 생성"""
        return (PaginationBuilder()
                .items(items)
                .total(total)
                .use_admin_page_size()
                .page(page)
                .build())

    @staticmethod
    def create_product_list_pagination(items: List[Any], total: int, page: int = 1) -> Pagination:
        """상품 목록용 Pagination 생성"""
        return (PaginationBuilder()
                .items(items)
                .total(total)
                .use_product_list_page_size()
                .page(page)
                .build())

    @staticmethod
    def create_with_custom_config(items: List[Any], total: int, **kwargs) -> Pagination:
        """커스텀 설정으로 Pagination 생성"""
        builder = PaginationBuilder().items(items).total(total)
        
        if 'page' in kwargs:
            builder = builder.page(kwargs['page'], kwargs.get('limit'))
        elif 'offset' in kwargs:
            builder = builder.offset(kwargs['offset'])
            if 'limit' in kwargs:
                builder = builder.limit(kwargs['limit'])
        
        if kwargs.get('admin_mode'):
            builder = builder.use_admin_page_size()
        elif kwargs.get('product_list_mode'):
            builder = builder.use_product_list_page_size()
            
        return builder.build()