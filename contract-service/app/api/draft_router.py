from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_draft():
    """사용자 초안"""
    logger.info(f"📝 초안 요청: ")
 
    return JSONResponse(content={"message": "Hello, Draft!"})
