import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config({
  path: '.env'
});

const app = express();
const PORT = process.env.APP_PORT;

app.get("/", (req: Request, res: Response) => {
  res.json({greeting: 'Hello world'});
});

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}...`);
});



