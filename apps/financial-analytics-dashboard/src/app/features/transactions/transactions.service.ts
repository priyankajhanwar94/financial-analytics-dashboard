import {inject, Injectable} from '@angular/core';
import { TransactionTable } from './transactions.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/financial-analytics-dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class TransactionService {
    private http = inject(HttpClient);
    fetchTransactions(
      page: number,
      tab: string,
      search: string) {
      return this.http
        .get<TransactionTable>(`${environment.apiUrl}/transactions?pageNumber=${page}&filterBy=${tab}&searchBy=${search}`);
    }
}