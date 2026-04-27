export interface RecentTransaction {
  label: string;
  icon: string;
  amount: string;
  bgColor: string;
  transactionId: string;
  date: string;
  type: 'card' | 'paypal' | 'transfer';
}

export interface Transaction {
  id: string;
  description: string;
  type: 'card' | 'paypal' | 'transfer';
  amount: number;
  currency: string;
  date: string;
  direction: 'credit' | 'debit';
}

  export type RecentTransactionsState =
    | { status: 'loading' }
    | { status: 'error'; error: string }
    | { status: 'success'; data: RecentTransaction[] };