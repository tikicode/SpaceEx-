import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { call_rapyd_api } from './api';

dotenv.config({
  path: '.env'
});

const app = express();
const PORT = process.env.APP_PORT;

app.get("/", (req: Request, res: Response) => {
  call_rapyd_api('get', '/v1/data2312/countries')
  .then(tes => { 
    const hi = tes['data'];
    res.send(hi);
  })
});

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}...`);
});
