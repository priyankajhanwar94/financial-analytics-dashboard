import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpenseStaticsModel } from './expense-statics.model';

@Injectable({providedIn: 'root'})
export class ExpenseStaticsService {
    private http = inject(HttpClient);
    fetchExpenseStatics() {
      return this.http
        .get<ExpenseStaticsModel[]>(`http://localhost:5000/expense-statics`);
    }
}