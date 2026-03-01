import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './recent-transactions.model';
import { environment } from 'apps/financial-analytics-dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class RecentTransactionsService {
    private http = inject(HttpClient);
    fetchRecentTransactions(){
      return this.http
        .get<Transaction[]>(`${environment.apiUrl}/recent-transactions`);
    }
}