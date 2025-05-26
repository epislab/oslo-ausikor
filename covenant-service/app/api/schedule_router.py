from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_schedule():
    """사용자 일정"""
    logger.info(f"📅 일정 요청: ")
 
    return JSONResponse(content={"message": "Hello, Schedule!"})
