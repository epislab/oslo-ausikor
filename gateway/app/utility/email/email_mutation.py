import smtplib
import logging
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
from typing import Optional, List, Dict, Any
from pathlib import Path
from app.utility.email.email_provider import email_provider

logger = logging.getLogger("email_mutation")

class CreateEmail:
    """이메일 생성 및 발송 클래스"""
    
    def __init__(
        self, 
        recipient_email: str, 
        subject: str, 
        body: str,
        body_type: str = "html",
        cc_emails: Optional[List[str]] = None,
        bcc_emails: Optional[List[str]] = None,
        attachments: Optional[List[str]] = None
    ):
        self.recipient_email = recipient_email
        self.subject = subject
        self.body = body
        self.body_type = body_type  # "html" or "plain"
        self.cc_emails = cc_emails or []
        self.bcc_emails = bcc_emails or []
        self.attachments = attachments or []
        
        # 설정 검증
        if not email_provider.is_configured():
            raise ValueError("이메일 설정이 완료되지 않았습니다. SMTP 환경변수를 확인해주세요.")
    
    def _create_message(self) -> MIMEMultipart:
        """이메일 메시지 생성"""
        message = MIMEMultipart()
        
        # 기본 헤더 설정
        message["From"] = f"{email_provider.smtp_sender_name} <{email_provider.smtp_sender_email}>"
        message["To"] = self.recipient_email
        message["Subject"] = self.subject
        
        # CC, BCC 설정
        if self.cc_emails:
            message["Cc"] = ", ".join(self.cc_emails)
        if self.bcc_emails:
            message["Bcc"] = ", ".join(self.bcc_emails)
        
        # 본문 추가
        message.attach(MIMEText(self.body, self.body_type, email_provider.default_charset))
        
        # 첨부파일 추가
        for attachment_path in self.attachments:
            self._add_attachment(message, attachment_path)
        
        return message
    
    def _add_attachment(self, message: MIMEMultipart, file_path: str) -> None:
        """첨부파일 추가"""
        try:
            file_path_obj = Path(file_path)
            if not file_path_obj.exists():
                logger.warning(f"첨부파일을 찾을 수 없습니다: {file_path}")
                return
            
            with open(file_path, "rb") as attachment:
                part = MIMEBase('application', 'octet-stream')
                part.set_payload(attachment.read())
            
            encoders.encode_base64(part)
            part.add_header(
                'Content-Disposition',
                f'attachment; filename= {file_path_obj.name}'
            )
            message.attach(part)
            
        except Exception as e:
            logger.error(f"첨부파일 추가 중 오류 발생: {file_path}, {str(e)}")
    
    def _get_all_recipients(self) -> List[str]:
        """모든 수신자 목록 반환"""
        recipients = [self.recipient_email]
        recipients.extend(self.cc_emails)
        recipients.extend(self.bcc_emails)
        return recipients
    
    def send(self) -> Dict[str, Any]:
        """이메일 발송"""
        try:
            logger.info(f"이메일 발송 시작: {self.recipient_email}")
            
            # 메시지 생성
            message = self._create_message()
            
            # SMTP 연결 및 발송
            if email_provider.smtp_use_ssl:
                # SSL 연결 (포트 465)
                with smtplib.SMTP_SSL(
                    host=email_provider.smtp_host, 
                    port=email_provider.smtp_port,
                    timeout=email_provider.email_timeout
                ) as server:
                    server.login(email_provider.smtp_sender_email, email_provider.smtp_sender_password)
                    server.sendmail(
                        email_provider.smtp_sender_email, 
                        self._get_all_recipients(), 
                        message.as_string()
                    )
            else:
                # TLS 연결 (포트 587)
                with smtplib.SMTP(
                    host=email_provider.smtp_host, 
                    port=email_provider.smtp_port,
                    timeout=email_provider.email_timeout
                ) as server:
                    if email_provider.smtp_use_tls:
                        server.starttls()
                    server.login(email_provider.smtp_sender_email, email_provider.smtp_sender_password)
                    server.sendmail(
                        email_provider.smtp_sender_email, 
                        self._get_all_recipients(), 
                        message.as_string()
                    )
            
            logger.info(f"이메일 발송 성공: {self.recipient_email}")
            return {
                "success": True,
                "message": "이메일이 성공적으로 발송되었습니다.",
                "recipient": self.recipient_email,
                "subject": self.subject
            }
            
        except smtplib.SMTPAuthenticationError as e:
            logger.error(f"SMTP 인증 실패: {str(e)}")
            return {
                "success": False,
                "message": "이메일 인증에 실패했습니다. SMTP 설정을 확인해주세요.",
                "error": str(e)
            }
        except smtplib.SMTPRecipientsRefused as e:
            logger.error(f"수신자 거부: {str(e)}")
            return {
                "success": False,
                "message": "수신자 이메일 주소가 유효하지 않습니다.",
                "error": str(e)
            }
        except smtplib.SMTPException as e:
            logger.error(f"SMTP 오류: {str(e)}")
            return {
                "success": False,
                "message": "이메일 발송 중 SMTP 오류가 발생했습니다.",
                "error": str(e)
            }
        except Exception as e:
            logger.error(f"이메일 발송 중 예상치 못한 오류: {str(e)}")
            return {
                "success": False,
                "message": "이메일 발송 중 오류가 발생했습니다.",
                "error": str(e)
            }

class EmailTemplate:
    """이메일 템플릿 클래스"""
    
    @staticmethod
    def welcome_email(user_name: str, user_email: str) -> CreateEmail:
        """환영 이메일 템플릿"""
        subject = f"Dover Platform에 오신 것을 환영합니다, {user_name}님!"
        body = f"""
        <html>
        <body>
            <h2>환영합니다! 🎉</h2>
            <p>안녕하세요 <strong>{user_name}</strong>님,</p>
            <p>Dover Platform에 가입해주셔서 감사합니다.</p>
            <p>이제 다양한 서비스를 이용하실 수 있습니다.</p>
            <br>
            <p>문의사항이 있으시면 언제든 연락주세요.</p>
            <p>감사합니다.</p>
            <hr>
            <small>Dover Platform Team</small>
        </body>
        </html>
        """
        return CreateEmail(user_email, subject, body, "html")
    
    @staticmethod
    def password_reset_email(user_name: str, user_email: str, reset_token: str) -> CreateEmail:
        """비밀번호 재설정 이메일 템플릿"""
        subject = "Dover Platform 비밀번호 재설정"
        reset_url = f"https://dover-platform.com/reset-password?token={reset_token}"
        body = f"""
        <html>
        <body>
            <h2>비밀번호 재설정 요청</h2>
            <p>안녕하세요 <strong>{user_name}</strong>님,</p>
            <p>비밀번호 재설정을 요청하셨습니다.</p>
            <p>아래 링크를 클릭하여 새로운 비밀번호를 설정해주세요:</p>
            <p><a href="{reset_url}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">비밀번호 재설정</a></p>
            <p><small>이 링크는 24시간 후 만료됩니다.</small></p>
            <br>
            <p>만약 비밀번호 재설정을 요청하지 않으셨다면, 이 이메일을 무시해주세요.</p>
            <hr>
            <small>Dover Platform Team</small>
        </body>
        </html>
        """
        return CreateEmail(user_email, subject, body, "html")