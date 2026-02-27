import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LoaderService } from '../../../core/services/loader.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-loader',
  imports: [AsyncPipe],
  templateUrl: './loader.html',
  styleUrl: './loader.css',
})
export class Loader {
  isLoading: Observable<boolean>;
  private loaderService = inject(LoaderService);

  constructor() {
    this.isLoading = this.loaderService.isLoading$;
  }
}
