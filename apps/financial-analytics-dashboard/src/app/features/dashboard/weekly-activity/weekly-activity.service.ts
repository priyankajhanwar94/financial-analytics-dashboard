import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { WeeklyActivityModel } from './weekly-activity.model';

@Injectable({providedIn: 'root'})
export class WeeklyActivityService {
    private http = inject(HttpClient);
    fetchWeeklyActivity(){
      return this.http
        .get<WeeklyActivityModel[]>(`http://localhost:5000/weekly-activity`);
    }
}