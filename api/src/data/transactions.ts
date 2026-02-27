export interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
}

export const transactions: Transaction[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Transaction ${i + 1}`,
  amount: Math.floor(Math.random() * 1000),
  date: new Date().toISOString()
}));