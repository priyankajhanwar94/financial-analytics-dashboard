import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { catchError, map, of, startWith } from 'rxjs';
import { BalanceHistoryChart, BalanceHistoryModel, BalanceHistoryState } from './balance-history.model';
import { BalanceHistoryService } from './balance-history.service';

@Component({
  selector: 'app-balance-history',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './balance-history.html',
  styleUrl: './balance-history.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BalanceHistory {
  private balanceHistoryService = inject(BalanceHistoryService);

  balanceChart$ = this.balanceHistoryService.fetchBalanceHistory().pipe(
    map(txns => ({
      status: 'success',
      data: this.mapToUI(txns)
    } as BalanceHistoryState)),
    startWith({
      status: 'loading'
    } as BalanceHistoryState),
    catchError(() => of({
      status: 'error',
      error: 'Failed to load expense statics'
    } as BalanceHistoryState))
  );

  mapToUI(txns: BalanceHistoryModel[]): BalanceHistoryChart {
    return {
      series: [
        {
          name: "Desktops",
          data: txns.map(item => item.balance)
        }
      ],
      chart: {
        height: 250,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: txns.map(item => item.month)
      }
    };
  }
}
