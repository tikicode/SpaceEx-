import express, { Router } from 'express';
import {
  getWallet,
  createWallet,
} from './WalletController.js';

export const walletRouter = Router();
walletRouter.use(express.json());

walletRouter.post('/get/:walletID', getWallet);
walletRouter.post('/create', createWallet);
