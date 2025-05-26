
from app.utility.abstraction.abstract_factory import AbstractFactory
from app.utility.email.email_mutation import CreateEmail


class EmailFactory(AbstractFactory):
    def create(self, recipient_email: str, subject: str, body: str) -> CreateEmail:
        return CreateEmail(recipient_email, subject, body)