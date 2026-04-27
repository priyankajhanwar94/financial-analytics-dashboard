import express from 'express';
import cors from 'cors';
import { transactions } from './data/transactions';
import { loginData } from './data/login';
import { weeklyActivity } from './data/weeklyActivity';
import { expenseStatics } from './data/expenseStatics';
import { balanceHistory } from './data/balanceHistory';
import { recentTransactions } from './data/recentTransactions';
const app = express();
const PAGE_SIZE = 10;
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));

app.get('/', (_req, res) => {
  res.send('API ');
});

app.post('/login', (req, res) => {
  const data = loginData;
  res.send(data);
});

app.get('/weekly-activity', (req, res) => {
  const data = weeklyActivity;
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.get('/expense-statics', (req, res) => {
  const data = expenseStatics;
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.get('/balance-history', (req, res) => {
  const data = balanceHistory;
  setTimeout(() => {
    res.send(data);
  }, 1000);
});

app.get('/recent-transactions', (req, res) => {
  const data = recentTransactions;
    setTimeout(() => {
    res.send(data);
  }, 1000);
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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});