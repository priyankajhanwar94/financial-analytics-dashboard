import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BalanceHistoryModel } from './balance-history.model';

@Injectable({providedIn: 'root'})
export class BalanceHistoryService {
    private http = inject(HttpClient);
    fetchBalanceHistory(){
      return this.http
        .get<BalanceHistoryModel[]>(`http://localhost:5000/balance-history`);
    }
}