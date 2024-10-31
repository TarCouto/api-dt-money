// src/routes/transactions.ts
import { Router } from 'express';
import { getTransactions, createTransaction } from '../controllers/transactionsController';

const router = Router();

router.get('/', getTransactions);
router.post('/', createTransaction);

export default router;
