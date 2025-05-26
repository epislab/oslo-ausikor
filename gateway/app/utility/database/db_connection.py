import threading
from app.utility.database.db_instance import db_instance


class DbConnection:
    """싱글톤 패턴을 적용한 DB 연결 클래스"""

    def __init__(self):
        pass


# ✅ 싱글톤 인스턴스 생성
db_connection = DbConnection()