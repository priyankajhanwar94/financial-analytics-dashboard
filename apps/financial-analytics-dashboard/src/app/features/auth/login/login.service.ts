import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login, LoginData } from './login.model';

@Injectable({providedIn: 'root'})
export class LoginService {
    private http = inject(HttpClient);
    login(payload:Login){
      return this.http
        .get<LoginData[]>(`http://localhost:5000/login`,{params : payload});
    }
}