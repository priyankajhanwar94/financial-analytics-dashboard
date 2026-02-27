export interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
  description: string;
  transactionID: string;
  type: 'Credit' | 'Debit';
  card: string; 
}

export const transactions: Transaction[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  description: `Transaction ${i + 1}`,
  transactionID: `TXN${1000 + i}`,
  type: i % 2 === 0 ? 'Credit' : 'Debit',
  card: `**** **** **** ${1000 + i}`,
  title: `Transaction ${i + 1}`,
  amount: Math.floor(Math.random() * 1000),
  date: new Date().toISOString()
}));