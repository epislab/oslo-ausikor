import inspect
from functools import wraps
from typing import Callable, Type

import jwt
from fastapi import Form
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from pydantic.fields import FieldInfo  # ✅ 올바른 import
from sqlalchemy.exc import OperationalError
from starlette.responses import JSONResponse

from app.foundation.core.security import token_singleton
from app.foundation.design.structural.facade.response_facade import ResponseFacade
from app.foundation.enums.http_status_code import HttpStatusCode


# 프론트에서 form 데이터가 올 때 사용
def as_form_data(cls: Type[BaseModel]):
    new_parameters = []

    for field_name, model_field in cls.model_fields.items():  # ✅ Pydantic v2에서는 `__fields__` 대신 `model_fields`
        model_field: FieldInfo  # ✅ ModelField 대신 FieldInfo 사용

        new_parameters.append(
            inspect.Parameter(
                model_field.alias or field_name,
                inspect.Parameter.POSITIONAL_ONLY,
                default=Form(...) if model_field.default is None else Form(model_field.default),
                annotation=model_field.annotation,
            )
        )

    async def as_form_func(**data):
        return cls(**data)

    sig = inspect.signature(as_form_func)
    sig = sig.replace(parameters=new_parameters)
    as_form_func.__signature__ = sig  # type: ignore
    setattr(cls, 'as_form_data', as_form_func)
    return cls