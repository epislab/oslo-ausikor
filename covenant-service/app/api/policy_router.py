from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_policy():
    """사용자 정책"""
    logger.info(f"📜 정책 요청: ")
 
    return JSONResponse(content={"message": "Hello, Policy!"})
