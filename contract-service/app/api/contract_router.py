from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_contract():
    """사용자 계약서"""
    logger.info(f"🔐 계약서 요청: ")
 
    return JSONResponse(content={"message": "Hello, Contract!"})