.PHONY: build
build:
	docker compose build

.PHONY: install-deps
install-deps:
	docker-compose run --rm web yarn install

.PHONY: up
up:
	docker-compose up -d