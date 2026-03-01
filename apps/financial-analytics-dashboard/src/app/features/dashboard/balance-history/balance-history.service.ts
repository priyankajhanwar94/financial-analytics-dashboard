import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BalanceHistoryModel } from './balance-history.model';
import { environment } from 'apps/financial-analytics-dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class BalanceHistoryService {
    private http = inject(HttpClient);
    fetchBalanceHistory(){
      return this.http
        .get<BalanceHistoryModel[]>(`${environment.apiUrl}/balance-history`);
    }
}