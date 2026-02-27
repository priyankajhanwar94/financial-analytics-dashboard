export interface Transaction {
  id: number;
  title: string;
  amount: number;
  date: string;
  description: string;
  transactionID: string;
  type: 'Credit' | 'Debit';
  card: string; 
  currency: string;
}
export interface TransactionTable {
  data: Transaction[];
  pageNumber: number;
  totalTransactions: number;
}
export interface ApiResponse<T> {
  data: T;
}
export interface TabItem {
  label: string;
  id: string;
  isActive: boolean;
}