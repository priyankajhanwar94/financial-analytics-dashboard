import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseStaticsModel } from './expense-statics.model';
import { environment } from 'apps/financial-analytics-dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class ExpenseStaticsService {
    private http = inject(HttpClient);
    fetchExpenseStatics() {
      return this.http
        .get<ExpenseStaticsModel[]>(`${environment.apiUrl}/expense-statics`);
    }
}