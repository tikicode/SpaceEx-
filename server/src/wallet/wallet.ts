import express, { Router, Response, Request } from 'express';
import { callRapydApi } from '../api';

const router = Router();

router.use(express.json());

exports.createWallet = (req: Request, res: Response) => {
  res.send("Not implemented");
}

router.route('/').get((req: Request, res: Response) => {
  res.json({wallet: "HELLO WALLET"});
});

router.route('/').post((req: Request, res: Response) => {
  const body = req.body;
  callRapydApi('post', '/v1/user', body).then(result => {
      res.send(result)
  });
});

export default router;
