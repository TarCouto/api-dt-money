// src/controllers/transactionsController.ts
import { Request, Response } from 'express';
import pool from '../db';

// Handler para obter transações
export const getTransactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await pool.query('SELECT * FROM transactions');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar transações' });
  }
};

// Handler para criar uma nova transação
export const createTransaction = async (req: Request, res: Response): Promise<void> => {
  const { description, type, category, price } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO transactions (description, type, category, price) VALUES ($1, $2, $3, $4) RETURNING *',
      [description, type, category, price]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar transação' });
  }
};
