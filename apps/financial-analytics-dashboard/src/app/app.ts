import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Loader } from './shared/components/loader/loader';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { LoaderService } from './core/services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [RouterModule, Loader, AsyncPipe],
  // providers:[{provide: HTTP_INTERCEPTORS, useClass : AuthInterceptor}]
})

export class App {
  isLoading: Observable<boolean>;
  private loaderService = inject(LoaderService);
  constructor() {
    this.isLoading = this.loaderService.isLoading$;
  }
  message = '';
  data={};
}

