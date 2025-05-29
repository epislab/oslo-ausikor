from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_termination():
    """사용자 종료"""
    logger.info(f"🔚 종료 요청: ")
 
    return JSONResponse(content={"message": "Hello, Termination!"})
