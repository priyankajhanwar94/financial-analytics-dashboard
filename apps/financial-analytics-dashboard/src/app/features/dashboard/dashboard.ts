import { Component } from '@angular/core';
import { ApexChart, ApexDataLabels, ApexLegend, ApexNonAxisChartSeries, ApexPlotOptions, ApexResponsive, ApexStroke, NgApexchartsModule } from 'ng-apexcharts';
import { InfoCard } from '../../shared/components/info-card/info-card';

@Component({
  selector: 'app-dashboard',
  imports: [InfoCard, NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  chartOptions: ChartOptions = {
    series: [20, 30, 35, 15],
    chart: {
      type: 'donut',
      height: 400
    },
    stroke: {
      show: true,
      width: 7,
      colors: ['#fff']
    },
    labels: ['Others', 'Investments', 'Entertainment', 'Bills'],
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
  infoCard = [
    { label: 'My Balance', icon: 'assets/icons/balance.svg', amount: '$2,000.00', bgColor: 'bg-[#FFF5D9]' },
    { label: 'Income', icon: 'assets/icons/income.svg', amount: '$2,000.00', bgColor: 'bg-[#E7EDFF]' },
    { label: 'Expense', icon: 'assets/icons/expense.svg', amount: '$2,000.00', bgColor: 'bg-[#FFE0EB]' },
    { label: 'Total Saving', icon: 'assets/icons/saving.svg', amount: '$2000.00', bgColor: 'bg-[#DCFAF8]' },
  ];
}
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
};