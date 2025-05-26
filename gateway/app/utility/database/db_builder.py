from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import asyncpg
import os


# ✅ 1. DatabaseBuilder: SQLAlchemy 엔진 및 세션 빌더
class DbBuilder:
    def __init__(self):
        self._database_url = None
        self._echo = False
        self._future = True
        self._autocommit = False
        self._autoflush = False
        self._engine = None
        self._session_local = None
        self._base = None

    def database_url(self, url: str):
        self._database_url = url
        return self

    def echo(self, enable: bool = True):
        self._echo = enable
        return self

    def future(self, enable: bool = True):
        self._future = enable
        return self

    def autocommit(self, enable: bool = False):
        self._autocommit = enable
        return self

    def autoflush(self, enable: bool = False):
        self._autoflush = enable
        return self

    def build(self):
        """SQLAlchemy 엔진과 세션을 생성"""
        if not self._database_url:
            raise ValueError("Database URL이 설정되지 않았습니다.")

        self._engine = create_engine(self._database_url, echo=self._echo, future=self._future)
        self._session_local = sessionmaker(autocommit=self._autocommit, autoflush=self._autoflush, bind=self._engine)
        self._base = declarative_base()
        return self




# ✅ 3. FastAPI와 연동을 위한 Database Session Generator
def get_db() :
    """SQLAlchemy 세션을 제공하는 FastAPI 종속성"""
    db = session_local()
    try:
        yield db
    finally:
        db.close()


# ✅ 4. 초기화 함수 (비동기 DB 테이블 생성)
async def init_db():
    """데이터베이스 초기화"""
    try:
        Base.metadata.create_all(bind=engine)
    except Exception as e:
        raise e
    
class DataBaseUtil:
    def __init__(self):
        self.conn = None
        self.cursor = None

    async def establish_connection(self):
        self.conn = await asyncpg.connect(
            host=os.getenv("DB_HOSTNAME"),
            port=int(os.getenv("DB_PORT", 5432)),
            user=os.getenv("DB_USERNAME"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_DATABASE"),
            charset=os.getenv("DB_CHARSET"),
            autocommit=True,
        )
        self.cursor = self.conn.cursor()

    async def close_connection(self):
        await self.cursor.close()


async def execute_query(query: str):
    conn = await asyncpg.connect(
            host=os.getenv("DB_HOSTNAME"),
            port=int(os.getenv("DB_PORT", 5432)),
            user=os.getenv("DB_USERNAME"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_DATABASE"),
            charset=os.getenv("DB_CHARSET"),
            autocommit=True,
        )
    cursor = conn.cursor()
    cursor.execute(query)
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    return result


# ✅ 5. 사용 예시
if __name__ == "__main__":
    # 🔹 SQLAlchemy DB 설정 빌드
    db_builder = (
        DbBuilder()
        .database_url("postgresql+asyncpg://username:password@db.supabase.co:5432/database_name")
        .echo(True)
        .future(True)
        .build()
    )

    engine = db_builder._engine
    session_local = db_builder._session_local
    Base = db_builder._base