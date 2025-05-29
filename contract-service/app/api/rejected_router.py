from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_rejected():
    """사용자 거부됨"""
    logger.info(f"❌ 거부됨 요청: ")
 
    return JSONResponse(content={"message": "Hello, Rejected!"})
