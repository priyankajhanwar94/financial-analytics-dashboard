import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { WeeklyActivityModel, WeeklySpendChart } from './weekly-activity.model';
import { WeeklyActivityService } from './weekly-activity.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-weekly-activity',
  standalone: true,
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './weekly-activity.html',
  styleUrl: './weekly-activity.css',
  providers: [WeeklyActivityService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeeklyActivity {
  private weeklyActivityService = inject(WeeklyActivityService);

  weeklySpendChart$ = this.weeklyActivityService.fetchWeeklyActivity().pipe(
    map(txns => this.mapDataToChart(txns))
  );

  mapDataToChart(data: WeeklyActivityModel[]): WeeklySpendChart {
    return {
      series: [
        {
          name: "Deposits",
          data: data.map((item: any) => item.deposits)
        },
        {
          name: "Withdrawals",
          data: data.map((item: any) => item.withdrawals)
        }
      ],
      chart: {
        type: "bar",
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          borderRadius: 8
        }
      },
      dataLabels: {
        enabled: true
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories:
          data.map((item: any) => item.day)
      },
      yaxis: {
        title: {
          text: "$ (thousands)"
        }
      },
      legend: {
        show: true
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }
}