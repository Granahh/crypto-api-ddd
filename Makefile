
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


start:
	docker-compose up -d

down:
	docker-compose down
