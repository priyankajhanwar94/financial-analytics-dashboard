import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexDataLabels, ApexGrid, ApexStroke } from "ng-apexcharts";

export type BalanceHistoryChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
}

export type BalanceHistoryModel = {
  month: string;
  balance: number;
}

export type BalanceHistoryState =
  | { status: 'loading' }
  | { status: 'error'; error: string }
  | { status: 'success'; data: BalanceHistoryChart };