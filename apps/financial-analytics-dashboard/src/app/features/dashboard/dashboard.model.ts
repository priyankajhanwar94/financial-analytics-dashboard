import { ApexNonAxisChartSeries, ApexChart, ApexStroke, ApexPlotOptions, ApexDataLabels, ApexLegend, ApexResponsive, ApexAxisChartSeries, ApexXAxis, ApexGrid } from "ng-apexcharts";

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
export type BalanceHistoryChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
}