import express, { Router } from 'express';
import { 
  createMerchant,
  deleteMerchant,
 } from "./MerchantController.js";

export const merchantRouter = Router();

merchantRouter.use(express.json());

merchantRouter.post('/create', createMerchant);
merchantRouter.delete('/delete', deleteMerchant);
