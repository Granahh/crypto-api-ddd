
# Shell to use for running scripts
SHELL := $(shell which bash)
CRYPTO_APP_NAME := crypto

# Test if the dependencies we need to run this Makefile are installed
DOCKER := $(shell command -v docker)
DOCKER_COMPOSE := $(shell command -v docker-compose)
deps:
ifndef DOCKER
	@echo "Docker is not available. Please install docker"
	@exit 1
endif
ifndef DOCKER_COMPOSE
	@echo "docker-compose is not available. Please install docker-compose"
	@exit 1
endif

default: build

# Build image
build:
	docker build -t $(CRYPTO_APP_NAME):dev .

start:
	docker-compose up -d

enter:
	docker-compose exec crypto_app bash

down:
	docker-compose down

logs:
	docker-compose logs -f crypto_app
