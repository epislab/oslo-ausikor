from app.utils.draft53.service.draft53_cleaner import Draft53Cleaner
from app.utils.draft53.service.draft53_do_add import Draft53DoAdd

strategy_map = {
    "draft53_do_add": Draft53DoAdd(),
    "draft53_cleaner": Draft53Cleaner()
}


class Draft53Factory:
    @staticmethod
    def create(strategy, **kwargs):
        instance = strategy_map[strategy]
        if not instance:
            raise Exception("invalid strategy")
        return instance.handle(**kwargs)