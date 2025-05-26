import hashlib
import imghdr
import io
from base64 import b64encode
from datetime import datetime
from typing import Union
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from fastapi import UploadFile


class SecurityUtils:
    """보안 관련 유틸리티"""
    
    @staticmethod
    def sha256_hash(data: str) -> str:
        """SHA256 해시 생성"""
        return hashlib.sha256(data.encode()).hexdigest()
    
    @staticmethod
    def sha512_hash(data: str) -> str:
        """SHA512 해시 생성"""
        return hashlib.sha512(data.encode()).hexdigest()
    
    @staticmethod
    def aes_128_cbc_encrypt(plain_text: str, key: str, iv: str) -> str:
        """AES-128-CBC 암호화"""
        cipher = AES.new(bytes(key.encode("UTF-8")), AES.MODE_CBC, iv.encode("UTF-8"))
        padded_plain_text = pad(data_to_pad=plain_text.encode("UTF-8"), block_size=AES.block_size)
        encrypted = cipher.encrypt(padded_plain_text)
        return b64encode(encrypted).decode('utf-8')


class FileUtils:
    """파일 관련 유틸리티"""
    
    @staticmethod
    def get_file_info(upload_file: UploadFile) -> tuple[Union[str, None], int]:
        """파일 정보 추출 (이미지 타입, 파일 크기)"""
        contents = upload_file.file.read()
        file_size = len(contents)
        file_like = io.BytesIO(contents)
        image_type = imghdr.what(file_like)
        upload_file.file.seek(0)
        return image_type, file_size





class PerformanceMonitor:
    """성능 모니터링 유틸리티"""
    
    @staticmethod
    def measure_duration(start_time: datetime, end_time: datetime) -> None:
        """요청 처리 시간 측정"""
        duration = (end_time - start_time).total_seconds()
        DebugUtils.console(f"요청 처리시간", f"{duration}초")


class DebugUtils:
    """디버깅 유틸리티"""
    
    @staticmethod
    def print_sql(memo: str, messages: str) -> None:
        """SQL 디버그 출력"""
        print(f"{'<' * 20}[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] {memo}{'>' * 20}")
        print(messages)
        print("." * 70)
    
    @staticmethod
    def console(*messages) -> None:
        """콘솔 디버그 출력"""
        print(f"{'#' * 40}[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}]{'#' * 40}")
        print(*messages)
        print("." * 100)
