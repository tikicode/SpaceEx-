import { callRapydApi } from '../rapyd.js';

export function getWallet(req, res) {
  res.send("NOT YET IMPLEMENTED :(");
}

export function createWallet(req, res) {
  const body = req.body;
  callRapydApi('post', '/v1/user', body).then(result => {
    res.send(result);
  });
}