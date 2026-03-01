import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeeklyActivityModel } from './weekly-activity.model';
import { environment } from 'apps/financial-analytics-dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class WeeklyActivityService {
    private http = inject(HttpClient);
    fetchWeeklyActivity(){
      return this.http
        .get<WeeklyActivityModel[]>(`${environment.apiUrl}/weekly-activity`);
    }
}