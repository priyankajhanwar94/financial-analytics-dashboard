import {inject, Injectable} from '@angular/core';
import { TransactionTable } from './transactions.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class TransactionService {
    private http = inject(HttpClient);
    fetchTransactions(
      page: number,
      tab: string,
      search: string) {
      return this.http
        .get<TransactionTable>(`http://localhost:5000/transactions?pageNumber=${page}&filterBy=${tab}&searchBy=${search}`);
    }
}