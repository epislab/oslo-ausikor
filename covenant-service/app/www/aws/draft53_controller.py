from app.utils.draft53.web.draft53_factory import Draft53Factory
from app.utils.util.decorator import check_employee_access_token


class Draft53Controller:

    def __init__(self):
        pass

    @check_employee_access_token
    def admin_draft53_do_add(self, **kwargs):
        return Draft53Factory.create(strategy="draft53_do_add", **kwargs)

    def draft53_do_add(self, **kwargs):
        return Draft53Factory.create(strategy="draft53_do_add", **kwargs)

    def draft53_cleaner(self, **kwargs):
        return Draft53Factory.create(strategy="draft53_cleaner", **kwargs)