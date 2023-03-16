import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CoinPutController } from '../controllers/Coin/CoinPutController';

export const register = (router: Router) => {
  const controller: CoinPutController = container.get('Apps.crypto.controllers.CoinPutController');
  router.put('/coin/:id', (req: Request, res: Response) => controller.run(req, res));
};
