import { ApexNonAxisChartSeries, ApexChart, ApexStroke, ApexPlotOptions, ApexDataLabels, ApexLegend, ApexResponsive } from "ng-apexcharts";

export type ExpenseStaticChart = {
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

export type ExpenseStaticsModel = {
  label: string;
  percent: number;
}