import { SetupServer } from '@src/server';
import { beforeEach } from 'node:test';
import supertest from 'supertest';

beforeEach(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
