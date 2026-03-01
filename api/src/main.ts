import express from 'express';
import cors from 'cors';
import { transactions } from './data/transactions';
import { delay } from 'rxjs';
import { loginData } from './data/login';
import { weeklyActivity } from './data/weeklyActivity';
import { expenseStatics } from './data/expenseStatics';
import { balanceHistory } from './data/balanceHistory';
import { recentTransactions } from './data/recentTransactions';
const app = express();
const PAGE_SIZE = 10;

// Allow Angular frontend
app.use(
  cors({
    origin: 'http://localhost:4200'
  })
);

app.get('/', (_req, res) => {
  res.send('API ');
});

app.get('/login', (req, res) => {
  const data = loginData;
  res.send(data);
});

app.get('/weekly-activity', (req, res) => {
  const data = weeklyActivity;
  res.send(data);
});

app.get('/expense-statics', (req, res) => {
  const data = expenseStatics;
  res.send(data);
});

app.get('/balance-history', (req, res) => {
  const data = balanceHistory;
  res.send(data);
});

app.get('/recent-transactions', (req, res) => {
  const data = recentTransactions;
  res.send(data);
});

app.get('/transactions', (req, res) => {
  const pageNumber = Number(req.query.pageNumber) || 1;

  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const filterBy = req.query.filterBy as string;
  const searchBy = req.query.searchBy as string;

  let filteredTransactions = transactions;
  if (filterBy !== 'all') {
    filteredTransactions = transactions.filter(tx => tx.type === filterBy);
  }
  if (searchBy) {
    filteredTransactions = filteredTransactions.filter(tx => 
      tx.title.toLowerCase().includes(searchBy.toLowerCase()) || 
      tx.description.toLowerCase().includes(searchBy.toLowerCase()) || 
      tx.transactionID.toLowerCase().includes(searchBy.toLowerCase())
    );
  }
  const paginatedData = filteredTransactions.slice(startIndex, endIndex);
  
  res.send({
    pageNumber,
    pageSize: PAGE_SIZE,
    totalTransactions: filteredTransactions.length,
    data: paginatedData
  });
});

app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});