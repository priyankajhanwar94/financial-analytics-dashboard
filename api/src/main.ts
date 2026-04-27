import express from 'express';
import cors from 'cors';

import { transactions } from './data/transactions';
import { loginData } from './data/login';
import { weeklyActivity } from './data/weeklyActivity';
import { expenseStatics } from './data/expenseStatics';
import { balanceHistory } from './data/balanceHistory';
import { recentTransactions } from './data/recentTransactions';

const app = express();

const PORT = process.env.PORT || 5000;
const PAGE_SIZE = 10;
const FAKE_TOKEN = '35678';

app.use(express.json());
app.use(cors({ origin: '*' }));

app.get('/', (_req, res) => {
  res.send('API is running');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== 'abc' || password !== '123') {
    return res.status(401).send({ error: 'Invalid credentials' });
  }

  res.send({
    ...loginData,
    token: FAKE_TOKEN,
  });
});

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  if (token !== FAKE_TOKEN) {
    return res.status(403).send({ error: 'Invalid token' });
  }
  next();
}

/*DASHBOARD APIS*/
app.get('/weekly-activity', authMiddleware, (_req, res) => {
  setTimeout(() => {
    res.send(weeklyActivity);
  }, 1000);
});

app.get('/expense-statics', authMiddleware, (_req, res) => {
  setTimeout(() => {
    res.send(expenseStatics);
  }, 1000);
});

app.get('/balance-history', authMiddleware, (_req, res) => {
  setTimeout(() => {
    res.send(balanceHistory);
  }, 1000);
});

app.get('/recent-transactions', authMiddleware, (_req, res) => {
  setTimeout(() => {
    res.send(recentTransactions);
  }, 1000);
});

/* TRANSACTIONS */
app.get('/transactions', authMiddleware, (req, res) => {
  const pageNumber = Number(req.query.pageNumber) || 1;
  const filterBy = req.query.filterBy as string;
  const searchBy = req.query.searchBy as string;

  const startIndex = (pageNumber - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  let filteredTransactions = transactions;

  if (filterBy !== 'all') {
    filteredTransactions = filteredTransactions.filter(
      tx => tx.type === filterBy
    );
  }

  if (searchBy) {
    const query = searchBy.toLowerCase();

    filteredTransactions = filteredTransactions.filter(tx =>
      tx.title.toLowerCase().includes(query) ||
      tx.description.toLowerCase().includes(query) ||
      tx.transactionID.toLowerCase().includes(query)
    );
  }

  const paginatedData = filteredTransactions.slice(startIndex, endIndex);

  res.send({
    pageNumber,
    pageSize: PAGE_SIZE,
    totalTransactions: filteredTransactions.length,
    data: paginatedData,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});