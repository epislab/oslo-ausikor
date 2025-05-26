from fastapi import APIRouter,Request
from fastapi.responses import JSONResponse
import logging


router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_executive():
    logger.info(f"🖍️Hello, Manager!")
    
    return JSONResponse(content={"message": "Hello, Manager!"})