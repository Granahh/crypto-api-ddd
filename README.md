# TypeScript Crypto Api - DDD

## Installation

### Install Node version 14

``nvm install 14``

``nvm use 14``

``
docker-compose up -d --build
``

### Ejecutar la migration para comenzar

``
npm run test:crypto:generate:migration
``

``
npm run dev:crypto:generate:migration
``

## Actividad

### Facil:
Crea un endpoint que se llame /coin-counter (Que sea un GET) y recupere las monedas creadas
Para ello tendrás un test a medio empezar, en el que se publica un evento de moneda creada,
luego deberás hacer un get y comprobar que se ha incrementado a 1.


### Puntos Extra:

Completa los tests que faltan del caso de uso CoinCounterIncrementer, además de crear los tests correspondientes para el coin-counter.


## Commands

### Run app

``npm run dev:crypto:backend``

### Run tests

``npm run test``

### Run feature tests

``npm run test:features``

### Run unit tests

``npm run test:unit``
