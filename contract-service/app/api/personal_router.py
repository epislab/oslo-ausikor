from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_personal():
    """사용자 개인정보"""
    logger.info(f"👤 개인정보 요청: ")
 
    return JSONResponse(content={"message": "Hello, Personal!"})
