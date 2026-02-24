import express from 'express';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.use(cors()); 

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/navItems', (req, res) => {
  res.send({ data: [
    { label: 'Dashboard', icon: 'assets/icons/dashboard.svg', route:'/dashboard', activeIcon: 'assets/icons/active-dashboard.svg' },
    { label: 'Transactions', icon: 'assets/icons/transaction.svg', route:'/transactions', activeIcon: 'assets/icons/active-transaction.svg' },
  ]});
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
