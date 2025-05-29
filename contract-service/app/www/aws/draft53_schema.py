from typing import Optional

from fastapi import UploadFile

from app.utils.util.config import BaseModelConfig
from app.utils.util.decorator import as_form_data


@as_form_data
class Draft53VO(BaseModelConfig):
    draft: Optional[list[UploadFile]] = None
    fname: Optional[list[str]] = None