.PHONY: help up down restart logs build clean

help:
	@echo "ArbVault Community - Commands"
	@echo "============================="
	@echo "make up      - Start services"
	@echo "make down    - Stop services"
	@echo "make logs    - View logs"
	@echo "make build   - Build containers"

up:
	docker-compose up -d

down:
	docker-compose down

logs:
	docker-compose logs -f

build:
	docker-compose build

clean:
	docker-compose down -v
