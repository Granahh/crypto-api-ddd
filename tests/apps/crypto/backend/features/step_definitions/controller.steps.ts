import assert from 'assert';
import { AfterAll, Before, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { CryptoBackendApp } from '../../../../../../src/apps/crypto/backend/CryptoBackendApp';
import container from '../../../../../../src/apps/crypto/backend/dependency-injection';
import { EnvironmentArranger } from '../../../../../Contexts/Shared/infrastructure/Arranger/EnvironmentArranger';

let _request: request.Test;
let application: CryptoBackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.httpServer).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Then('the response content should be:', response => {
  assert.deepStrictEqual(_response.body, JSON.parse(response));
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  application = new CryptoBackendApp();
  await application.start();
});

Before(async () => {
  const arranger = container.get<EnvironmentArranger>('Shared.EnvironmentArranger');
  await arranger.run();
});

AfterAll(async () => {
  await application.stop();
  const arranger = container.get<EnvironmentArranger>('Shared.EnvironmentArranger');
  await arranger.stop();
});
