# 📧 Gateway 이메일 설정 가이드

## 🔧 환경변수 설정

Gateway 서비스에서 이메일 발송 기능을 사용하려면 다음 환경변수를 `.env` 파일에 설정해야 합니다:

```bash
# SMTP 이메일 설정
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USE_TLS=true
SMTP_USE_SSL=false
SMTP_SENDER_EMAIL=your-email@gmail.com
SMTP_SENDER_PASSWORD=your-app-password
SMTP_SENDER_NAME=Dover Platform
EMAIL_TIMEOUT=30
```

## 📋 설정 옵션 설명

| 환경변수 | 설명 | 기본값 | 예시 |
|---------|------|--------|------|
| `SMTP_HOST` | SMTP 서버 호스트 | `smtp.gmail.com` | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP 서버 포트 | `587` | `587` (TLS), `465` (SSL) |
| `SMTP_USE_TLS` | TLS 사용 여부 | `true` | `true` / `false` |
| `SMTP_USE_SSL` | SSL 사용 여부 | `false` | `true` / `false` |
| `SMTP_SENDER_EMAIL` | 발신자 이메일 | 필수 | `noreply@yourcompany.com` |
| `SMTP_SENDER_PASSWORD` | 발신자 비밀번호/앱 비밀번호 | 필수 | `your-app-password` |
| `SMTP_SENDER_NAME` | 발신자 이름 | `Dover Platform` | `Your Company Name` |
| `EMAIL_TIMEOUT` | 이메일 발송 타임아웃(초) | `30` | `30` |

## 🔐 Gmail 설정 방법

### 1. 2단계 인증 활성화
1. Google 계정 설정으로 이동
2. 보안 → 2단계 인증 활성화

### 2. 앱 비밀번호 생성
1. Google 계정 설정 → 보안
2. "Google에 로그인" → "앱 비밀번호"
3. 앱 선택: "메일"
4. 기기 선택: "기타(맞춤 이름)"
5. 이름 입력: "Dover Platform"
6. 생성된 16자리 비밀번호를 `SMTP_SENDER_PASSWORD`에 사용

### 3. 환경변수 설정 예시
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USE_TLS=true
SMTP_USE_SSL=false
SMTP_SENDER_EMAIL=your-gmail@gmail.com
SMTP_SENDER_PASSWORD=abcd-efgh-ijkl-mnop
SMTP_SENDER_NAME=Dover Platform
EMAIL_TIMEOUT=30
```

## 📨 사용 예시

### 1. 기본 이메일 발송
```python
from app.platform.messaging.email.email_mutation import CreateEmail

# 이메일 생성
email = CreateEmail(
    recipient_email="user@example.com",
    subject="환영합니다!",
    body="<h1>Dover Platform에 오신 것을 환영합니다!</h1>",
    body_type="html"
)

# 발송
result = email.send()
print(result)
```

### 2. 템플릿 사용
```python
from app.platform.messaging.email.email_mutation import EmailTemplate

# 환영 이메일
welcome_email = EmailTemplate.welcome_email("홍길동", "user@example.com")
result = welcome_email.send()

# 비밀번호 재설정 이메일
reset_email = EmailTemplate.password_reset_email("홍길동", "user@example.com", "reset-token-123")
result = reset_email.send()
```

### 3. 고급 기능
```python
# CC, BCC, 첨부파일 포함
email = CreateEmail(
    recipient_email="user@example.com",
    subject="중요한 문서",
    body="첨부된 문서를 확인해주세요.",
    body_type="plain",
    cc_emails=["manager@example.com"],
    bcc_emails=["admin@example.com"],
    attachments=["/path/to/document.pdf"]
)

result = email.send()
```

## 🚨 주의사항

1. **보안**: `.env` 파일은 절대 Git에 커밋하지 마세요
2. **앱 비밀번호**: Gmail 계정 비밀번호가 아닌 앱 비밀번호를 사용하세요
3. **방화벽**: SMTP 포트(587, 465)가 열려있는지 확인하세요
4. **테스트**: 프로덕션 환경에서 사용하기 전에 테스트 환경에서 먼저 테스트하세요

## 🔍 문제 해결

### 인증 실패 (SMTPAuthenticationError)
- 앱 비밀번호가 올바른지 확인
- 2단계 인증이 활성화되어 있는지 확인
- Gmail의 "보안 수준이 낮은 앱의 액세스" 설정 확인

### 연결 실패 (SMTPConnectError)
- SMTP 호스트와 포트가 올바른지 확인
- 방화벽 설정 확인
- 네트워크 연결 상태 확인

### 수신자 거부 (SMTPRecipientsRefused)
- 수신자 이메일 주소 형식 확인
- 발신자 이메일 주소가 유효한지 확인 