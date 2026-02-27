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

  const filterBy = req.query.filterBy as string;
  let filteredTransactions = transactions;
  if (filterBy !== 'all') {
    filteredTransactions = transactions.filter(tx => tx.type === filterBy);
  }
  const paginatedData = filteredTransactions.slice(startIndex, endIndex);
  
  res.send({
    pageNumber,
    pageSize: PAGE_SIZE,
    totalTransactions: filteredTransactions.length,
    data: paginatedData
  });
});

app.get('/search/:searchBy', (req, res) => {
  const searchBy = req.params.searchBy.toLowerCase();
  const results = transactions.filter(tx => 
    tx.title.toLowerCase().includes(searchBy) || 
    tx.description.toLowerCase().includes(searchBy) || 
    tx.transactionID.toLowerCase().includes(searchBy)
  );
  res.send(results);
});
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});