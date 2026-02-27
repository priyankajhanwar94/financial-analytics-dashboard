import express from 'express';
import cors from 'cors';
import { transactions } from './data/transactions';
const app = express();

// Allow Angular frontend
app.use(
  cors({
    origin: 'http://localhost:4200'
  })
);
const PAGE_SIZE = 10;
app.get('/', (_req, res) => {
  res.send('API ');
});
app.get('/transactions', (req, res) => {
  const pageNumber = Number(req.query.pageNumber) || 1;

  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const paginatedData = transactions.slice(startIndex, endIndex);
  res.send({
    pageNumber,
    pageSize: PAGE_SIZE,
    totalItems: transactions.length,
    totalPages: Math.ceil(transactions.length / PAGE_SIZE),
    data: paginatedData
  });
  // res.send({data: 'Transactions data for page ' + req.query.pageNumber});
});
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});