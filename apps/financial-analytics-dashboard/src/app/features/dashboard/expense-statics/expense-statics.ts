import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-expense-statics',
  imports: [],
  templateUrl: './expense-statics.html',
  styleUrl: './expense-statics.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseStatics {
  expenseChart=input<any[]>([])
}
