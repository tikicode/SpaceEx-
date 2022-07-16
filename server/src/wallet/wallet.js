import express, { Router, Response, Request } from 'express';
import { callRapydApi } from '../rapyd';

const router = Router();

router.use(express.json());

exports.createWallet = (req, res) => {
  res.send("Not implemented");
}

router.route('/').get((req, res) => {
  res.json({wallet: "HELLO WALLET"});
});

router.route('/').post((req, res) => {
  const body = req.body;
  callRapydApi('post', '/v1/user', body).then(result => {
      res.send(result)
  });
});

export default router;
