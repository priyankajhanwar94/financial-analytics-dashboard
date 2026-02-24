import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ExpenseStaticChart } from '../dashboard.model';

@Component({
  selector: 'app-expense-statics',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './expense-statics.html',
  styleUrl: './expense-statics.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseStatics {
  expenseChart = input.required<ExpenseStaticChart>();
}
