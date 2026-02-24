import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BalanceHistoryChart } from '../dashboard.model';

@Component({
  selector: 'app-balance-history',
  imports: [NgApexchartsModule],
  templateUrl: './balance-history.html',
  styleUrl: './balance-history.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceHistory {
  balanceChart=input<BalanceHistoryChart[]>([])
}
