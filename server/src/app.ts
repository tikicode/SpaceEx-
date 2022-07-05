import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import routes from './wallet/wallet';

dotenv.config({
  path: '.env'
});

const app = express();
const PORT = process.env.APP_PORT;

app.use('/wallet', routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}...`);
});
