import 'reflect-metadata';
import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import { TestController } from './controllers/test.controller';
import cors from 'cors';
import logger from './logger';
import { resolveError } from './util/middlewares/resolve-error';

export class SetupServer extends Server {
  /*
   * same as this.port = port, declaring as private here will
   * add the port variable to the SetupServer instance
   */
  constructor(private port = 3001) {
    super();
  }

  /*
   * We use a different method to init instead of using the constructor
   * this way we allow the server to be used in tests and normal initialization
   */
  public async init(): Promise<void> {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(cors());
    this.app.use(resolveError);
    this.app.use(bodyParser.json());
    this.setupControllers();
  }

  private setupControllers(): void {
    const testController = new TestController();
    this.addControllers([testController]);
  }

  public getApp(): Application {
    return this.app;
  }

  // public async close(): Promise<void> {
  //   await database.close();
  // }

  public start(): void {
    this.app.listen(this.port, () => {
      logger.info('Server listening on port: ' + this.port);
    });
  }
}
