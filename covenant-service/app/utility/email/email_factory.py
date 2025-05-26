
from app.foundation.core.abstraction.abstract_factory import AbstractFactory
from app.platform.messaging.email.email_mutation import CreateEmail


class EmailFactory(AbstractFactory):
    def create(self, recipient_email: str, subject: str, body: str) -> CreateEmail:
        return CreateEmail(recipient_email, subject, body)