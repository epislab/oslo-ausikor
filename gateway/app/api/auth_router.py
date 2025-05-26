from fastapi import APIRouter, Request, HTTPException
from fastapi.responses import JSONResponse
import logging
from app.domain.auth.controller.auth_controller import AuthController
from app.domain.auth.model.auth_schema import LoginRequest, RefreshAccessTokenResponse

router = APIRouter()
logger = logging.getLogger("auth_service")
auth_controller = AuthController()

@router.post("/login")
async def login_user(req: LoginRequest):
    """사용자 로그인"""
    logger.info(f"🔑 로그인 요청: {req.email}")
    result = auth_controller.login_user(req)
    return JSONResponse(content=result)


@router.post("/logout")
async def logout_user(req: LoginRequest):
    """사용자 로그아웃"""
    logger.info(f"🔑 로그아웃 요청: {req.email}")
    result = auth_controller.logout_user(req)
    return JSONResponse(content=result)


@router.post("/{login_id}/refresh", response_model=RefreshAccessTokenResponse)
async def refresh_access_token(login_id: str):
    """Login 토큰 갱신"""
    response = await auth_controller.refresh_access_token(login_id)
    if not response:
        raise HTTPException(status_code=404, detail="토큰 갱신에 실패했습니다")
    return response

