import { Router, Request, Response } from 'express';
import container from '../dependency-injection';
import { CoinsGetController } from '../controllers/Coin/CoinsGetController';

export const register = (router: Router) => {
  const controller: CoinsGetController = container.get('Apps.crypto.controllers.CoinsGetController');
  router.get('/coins', (req: Request, res: Response) => controller.run(req, res));
};
