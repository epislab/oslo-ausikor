from typing import Optional

from fastapi import APIRouter, Depends, Body
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session
from starlette.responses import JSONResponse

from app.utils.draft53.model.draft53_schema import Draft53PostSchema
from app.utils.draft53.web.draft53_controller import Draft53Controller
from app.utils.util.config import BaseModelConfig, S3_PREFIX, S3_BUCKET_NAME, S3_DRAFT53_CTX
from app.utils.util.database import get_db
from app.utils.util.decorator import exception_handler
from app.utils.util.http_status_code import HttpStatusCode
from app.utils.util.response import query_string_not_found_message, success_message
from app.utils.util.storage import s3, s3_object_url_address

router = APIRouter()
controller = Draft53Controller()


@router.post(path="/draft53", status_code=HttpStatusCode.OK.value)
@exception_handler
async def post(do: Optional[str] = None,
               db: Session = Depends(get_db),
               vo: Draft53PostSchema = Depends(Draft53PostSchema)):
    if do == "add":
        result = controller.draft53_do_add(db=db, vo=vo)
    else:
        result = query_string_not_found_message()
    return JSONResponse(content=jsonable_encoder(obj=result))


# FiXME: 임시
class FileInfoVO(BaseModelConfig):
    fname: Optional[str] = None


@router.post(path="/movefile", status_code=HttpStatusCode.OK.value)
@exception_handler
async def post(vo: FileInfoVO = Body(FileInfoVO)):
    filename = vo.fname
    current_key = S3_DRAFT53_CTX + filename
    new_key = S3_PREFIX + "new/" + filename
    if filename.split(".")[-1] in ["jpg", "jpeg", "png", "jfif"]:
        s3.copy_object(Bucket=S3_BUCKET_NAME,
                       Key=new_key,
                       CopySource=S3_BUCKET_NAME + '/' + current_key,
                       ContentType='image/jpg',
                       ACL='public-read')
    else:
        s3.copy_object(Bucket=S3_BUCKET_NAME,
                       Key=new_key,
                       CopySource=S3_BUCKET_NAME + '/' + current_key,
                       ACL='public-read')
    s3.delete_object(Bucket=S3_BUCKET_NAME, Key=current_key)
    old_url_address = s3_object_url_address(current_key)
    new_url_address = s3_object_url_address(new_key)
    result = success_message(json=dict(oldUrlAddress=old_url_address, newUrlAddress=new_url_address))
    return JSONResponse(content=jsonable_encoder(obj=result))