import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './recent-transactions.model';

@Injectable({providedIn: 'root'})
export class RecentTransactionsService {
    private http = inject(HttpClient);
    fetchRecentTransactions(){
      return this.http
        .get<Transaction[]>(`http://localhost:5000/recent-transactions`);
    }
}