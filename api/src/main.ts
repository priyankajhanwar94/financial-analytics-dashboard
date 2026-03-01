import express from 'express';
import cors from 'cors';
import { transactions } from './data/transactions';
import { delay } from 'rxjs';
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
app.get('/login', (req, res) => {
  const loginData = {
    token:"35678",
    username: req.params,
    userType: 'admin'
  };
  res.send(loginData);
});
app.get('/weekly-activity', (req, res) => {
  const weeklyActivity = [
    { "day": "Sun", "deposits": 76, "withdrawals": 44 },
    { "day": "Mon", "deposits": 85, "withdrawals": 55 },
    { "day": "Tue", "deposits": 101, "withdrawals": 57 },
    { "day": "Wed", "deposits": 98, "withdrawals": 56 },
    { "day": "Thu", "deposits": 87, "withdrawals": 61 },
    { "day": "Fri", "deposits": 105, "withdrawals": 58 },
    { "day": "Sat", "deposits": 91, "withdrawals": 63 }
  ];
  res.send(weeklyActivity);
});
app.get('/expense-statics', (req, res) => {
  const statics = [
    { "label": "Others", "percent": 20 },
    { "label": "Investments", "percent": 30 },
    { "label": "Entertainment", "percent": 35 },
    { "label": "Bills", "percent": 15 },
  ];
  res.send(statics);
});

app.get('/balance-history', (req, res) => {
  const balanceHistory = [
    { "month": "Jan", "balance": 400 },
    { "month": "Feb", "balance": 250 },
    { "month": "Mar", "balance": 450 },
    { "month": "Apr", "balance": 350 },
    { "month": "May", "balance": 100 },
    { "month": "Jun", "balance": 600 },
    { "month": "Jul", "balance": 370 },
    { "month": "Aug", "balance": 400 },
    { "month": "Sep", "balance": 500 }, 
    { "month": "Oct", "balance": 100 },
    { "month": "Nov", "balance": 250 },
    { "month": "Dec", "balance": 200 }
  ];
  res.send(balanceHistory);
});

app.get('/recent-transactions', (req, res) => {
  const recentTransactions = [
  {
    "id": "TXN1234567890",
    "description": "Deposit from card",
    "type": "card",
    "amount": 2000,
    "currency": "USD",
    "date": "2026-01-21T00:00:00Z",
    "direction": "credit"
  },
  {
    "id": "TXN1234567891",
    "description": "Deposit Paypal",
    "type": "paypal",
    "amount": 12000,
    "currency": "USD",
    "date": "2026-01-22T00:00:00Z",
    "direction": "credit"
  },
  {
    "id": "TXN1234567892",
    "description": "Transfer to Mom",
    "type": "transfer",
    "amount": 2000,
    "currency": "USD",
    "date": "2026-01-23T00:00:00Z",
    "direction": "debit"
  }
]
  res.send(recentTransactions);
});
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});