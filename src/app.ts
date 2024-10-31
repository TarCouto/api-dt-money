// src/app.ts
import express, { Application } from 'express';
import transactionsRoutes from './routes/transactions';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsing de JSON
app.use(express.json());

// Rotas
app.use('/transactions', transactionsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
