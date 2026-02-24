import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-recent-transactions',
  imports: [],
  templateUrl: './recent-transactions.html',
  styleUrl: './recent-transactions.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentTransactions {
  recentTransactions=input<any[]>([])
}
