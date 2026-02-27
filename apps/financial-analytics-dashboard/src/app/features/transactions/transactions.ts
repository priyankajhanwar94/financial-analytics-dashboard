import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, Signal } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  imports: [],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions implements OnInit {
  private http = inject(HttpClient);
  transactions = signal<Transaction[]>([]);
ngOnInit(): void {
  this.http
    .get<any>('http://localhost:5000/transactions?pageNumber=1')
    .subscribe({
      next: (res) => {
        // this.transactions = res.data;
        this.transactions.set(res.data);
        console.log('Fetched transactions:', this.transactions);
      },
      error: (err) => {
        console.error('Error fetching transactions:', err);
      }
    });
}
}
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