from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_survey():
    """사용자 설문조사"""
    logger.info(f"📊 설문조사 요청: ")
 
    return JSONResponse(content={"message": "Hello, Survey!"})
