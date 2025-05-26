from fastapi import APIRouter,Request
from fastapi.responses import JSONResponse
import logging


router = APIRouter()
logger = logging.getLogger(__name__)

@router.get("/hello")
async def hello_director():
    logger.info(f"🖍️Hello, Director!")
    
    return JSONResponse(content={"message": "Hello, Director!"})