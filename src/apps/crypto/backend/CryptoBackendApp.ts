import { Server } from './server';
import cryptoConfig from '../../../Contexts/Crypto/Shared/infrastructure/config';

export class CryptoBackendApp {
  server?: Server;

  async start() {
    this.server = new Server(cryptoConfig.get('app').port);
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}
