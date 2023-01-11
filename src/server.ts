import './util/module-alias';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
export class SetupServer extends Server {
  /*
   * same as this.port = port, declaring as private here will
   * add the port variable to the SetupServer instance
   */
  constructor(private port = process.env.PORT || 3001) {
    super();
  }

  /*
   * We use a different method to init instead of using the constructor
   * this way we allow the server to be used in tests and normal initialization
   */
  public async init(): Promise<void> {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.setupControllers();
  }

  private setupControllers(): void {
    // const forecastController = new ForecastController();
    // this.addControllers([forecastController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
