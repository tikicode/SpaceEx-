import express, { Router } from 'express';
import { createMerchant } from "./MerchantController";

const merchantRouter = Router();
merchantRouter.use(express.json());

merchantRouter.post('/create', createMerchant);

export default merchantRouter;
