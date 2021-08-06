.PHONY: up-build
up-build:
	docker compose build
	docker-compose run --rm web yarn install
	docker-compose up -d

.PHONY: up
up:
	docker-compose up -d

.PHONY: log-web
log-web:
	docker logs -t company-official-app-frontend_web_1