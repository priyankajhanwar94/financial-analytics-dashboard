import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Loader } from './shared/components/loader/loader';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterModule, Loader],
  // providers:[{provide: HTTP_INTERCEPTORS, useClass : AuthInterceptor}]
})
export class App {
  message = '';
  data={};
}