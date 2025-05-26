from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_user():
    """사용자 회원가입"""
    logger.info(f"🔐 회원가입 요청: ")
 
    return JSONResponse(content={"message": "Hello, User!"})

@router.get("/profile/{user_id}")
async def get_user_profile(user_id: int):
    """사용자 프로필 조회"""
    logger.info(f"👤 사용자 프로필 조회: {user_id}")
    return JSONResponse(content={"message": "사용자 프로필 조회 성공"})