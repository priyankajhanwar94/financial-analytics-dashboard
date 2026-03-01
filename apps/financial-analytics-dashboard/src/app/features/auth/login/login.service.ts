import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login, LoginData } from './login.model';
import { environment } from 'apps/financial-analytics-dashboard/src/environments/environment';

@Injectable({providedIn: 'root'})
export class LoginService {
    private http = inject(HttpClient);
    login(payload:Login){
      return this.http
        .get<LoginData[]>(`${environment.apiUrl}/login`,{params : payload});
    }
}