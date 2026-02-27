import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Loader } from './shared/components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterModule, Loader],
})
export class App {
  message = '';
  data={};

  constructor(private http: HttpClient) {}

  load() {
    this.http.get<any>('http://localhost:5000/transactions?pageNumber=2')
      .subscribe(res => this.data = res.data);
  }
}