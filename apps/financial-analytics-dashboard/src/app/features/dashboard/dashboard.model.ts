import { ApexNonAxisChartSeries, ApexChart, ApexStroke, ApexPlotOptions, ApexDataLabels, ApexLegend, ApexResponsive, ApexAxisChartSeries, ApexXAxis, ApexGrid, ApexFill, ApexTooltip, ApexYAxis } from "ng-apexcharts";

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
export type WeeklySpendChart = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
};