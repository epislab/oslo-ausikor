# 모든 명령어 앞에 'make' 를 붙여서 실행해야 함
# 🔧 공통 명령어
up:
	docker-compose up -d --build

down:
	docker-compose down

logs:
	docker-compose logs -f

restart:
	docker-compose down && docker-compose up -d --build

ps:
	docker-compose ps


# 🚀 마이크로서비스별 명령어

## gateway
build-gateway:
	docker-compose build gateway

up-gateway:
	docker-compose up -d gateway

down-gateway:
	docker-compose stop gateway

logs-gateway:
	docker-compose logs -f gateway

restart-gateway:
	docker-compose stop gateway && docker-compose up -d gateway

## account-service
build-account:
	docker-compose build account-service

up-account:
	docker-compose up -d account-service

down-account:
	docker-compose stop account-service

logs-account:
	docker-compose logs -f account-service

restart-account:
	docker-compose stop account-service && docker-compose up -d account-service

## board-service
build-board:
	docker-compose build board-service

up-board:
	docker-compose up -d board-service

down-board:
	docker-compose stop board-service

logs-board:
	docker-compose logs -f board-service

restart-board:
	docker-compose stop board-service && docker-compose up -d board-service

## chatbot-service
build-chatbot:
	docker-compose build chatbot-service

up-chatbot:
	docker-compose up -d chatbot-service

down-chatbot:
	docker-compose stop chatbot-service

logs-chatbot:
	docker-compose logs -f chatbot-service

restart-chatbot:
	docker-compose stop chatbot-service && docker-compose up -d chatbot-service

## covenant-service
build-covenant:
	docker-compose build covenant-service

up-covenant:
	docker-compose up -d covenant-service

down-covenant:
	docker-compose stop covenant-service

logs-covenant:
	docker-compose logs -f covenant-service

restart-covenant:
	docker-compose stop covenant-service && docker-compose up -d covenant-service

## economy-service
build-economy:
	docker-compose build economy-service

up-economy:
	docker-compose up -d economy-service

down-economy:
	docker-compose stop economy-service

logs-economy:
	docker-compose logs -f economy-service

restart-economy:
	docker-compose stop economy-service && docker-compose up -d economy-service

## item-service
build-item:
	docker-compose build item-service

up-item:
	docker-compose up -d item-service

down-item:
	docker-compose stop item-service

logs-item:
	docker-compose logs -f item-service

restart-item:
	docker-compose stop item-service && docker-compose up -d item-service

## organization-service
build-organization:
	docker-compose build organization-service

up-organization:
	docker-compose up -d organization-service

down-organization:
	docker-compose stop organization-service

logs-organization:
	docker-compose logs -f organization-service

restart-organization:
	docker-compose stop organization-service && docker-compose up -d organization-service