import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { map } from 'rxjs';
import { ExpenseStaticChart, ExpenseStaticsModel } from './expense-statics.model';
import { ExpenseStaticsService } from './expense-statics.service';

@Component({
  selector: 'app-expense-statics',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './expense-statics.html',
  styleUrl: './expense-statics.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseStatics {
  private expenseStaticsService = inject(ExpenseStaticsService);

  expenseStaticsChart$ = this.expenseStaticsService.fetchExpenseStatics().pipe(
    map(txns => this.mapDataToChart(txns))
  );

  mapDataToChart(data: ExpenseStaticsModel[]): ExpenseStaticChart {
    const series = data.map(item => item.percent);
    const labels = data.map(item => item.label);
    return {
      series: series,
      chart: {
        type: 'donut',
        height: 400
      },
      stroke: {
        show: true,
        width: 7,
        colors: ['#fff']
      },
      labels: labels,
      colors: ['#343C6A', '#FF00FF', '#1814F3', '#FC7900'],
      plotOptions: {
        pie: {
          dataLabels: {
            offset: 0,
            minAngleToShowLabel: 15
          },
          expandOnClick: false,
          donut: {
            size: '0%'
          }
        }
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '14px',
          fontWeight: 400
        },
        formatter: (val: number, opts: any) => {
          const percent = opts.w.config.series[opts.seriesIndex];
          const label = opts.w.config.labels[opts.seriesIndex];
          return percent + '%\n' + label;
        }
      },
      legend: {
        show: false
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 300
            }
          }
        }
      ]
    };
  };
}
