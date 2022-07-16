import dotenv from 'dotenv';
import express from 'express';
import  { merchantRouter } from './Merchant/MerchantRoutes.js'; 
import { walletRouter } from './Wallet/WalletRoutes.js';

dotenv.config({
  path: '.env'
});

const app = express();
const PORT = process.env.APP_PORT;

app.use('/merchant', merchantRouter);

app.use('/wallet', walletRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`\nServer listening on http://localhost:${PORT}...`);
});
