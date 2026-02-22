import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class App {
  message = '';

  constructor(private http: HttpClient) {}

  load() {
    this.http.get<any>('http://localhost:3000/')
      .subscribe(res => this.message = res.message);
  }
}