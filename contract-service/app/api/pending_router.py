from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_pending():
    """사용자 대기중"""
    logger.info(f"⏳ 대기중 요청: ")
 
    return JSONResponse(content={"message": "Hello, Pending!"})
