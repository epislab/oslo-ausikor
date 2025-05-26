from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_guideline():
    """사용자 가이드라인"""
    logger.info(f"📋 가이드라인 요청: ")
 
    return JSONResponse(content={"message": "Hello, Guideline!"})
