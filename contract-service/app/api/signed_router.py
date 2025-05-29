from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_signed():
    """사용자 서명됨"""
    logger.info(f"✅ 서명됨 요청: ")
 
    return JSONResponse(content={"message": "Hello, Signed!"})
