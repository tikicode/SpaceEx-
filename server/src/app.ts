import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { callRapydApi } from './api';

dotenv.config({
  path: '.env'
});

const app = express();
const PORT = process.env.APP_PORT;

app.get("/", (req: Request, res: Response) => {
  callRapydApi('get', '/v1/data/countries')
  .then(tes => { 
    res.send(tes);
  })
});

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}...`);
});
