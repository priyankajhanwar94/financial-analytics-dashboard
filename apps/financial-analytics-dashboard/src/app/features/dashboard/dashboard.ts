import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InfoCard } from '../../shared/components/info-card/info-card';
import { BalanceHistoryChart, ExpenseStaticChart, WeeklySpendChart } from './dashboard.model';

@Component({
  selector: 'app-dashboard',
  imports: [InfoCard, NgApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  weeklySpendChart: WeeklySpendChart = {
      series: [
        {
          name: "Deposits",
          data: [76, 85, 101, 98, 87, 105, 91]
        },
        {
          name: "Withdrawals",
          data: [44, 55, 57, 56, 61, 58, 63]
        }
      ],
      colors: [],
      chart: {
        type: "bar",
        height: 300
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
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
        categories: [
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat"
        ]
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
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  expenseChart: ExpenseStaticChart = {
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

  balanceChart: BalanceHistoryChart = {
    series: [
      {
        name: "Desktops",
        data: [300, 250, 450, 350, 100, 600, 370, 400, 500]
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
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    }
  };

  infoCard = [
    { label: 'My Balance', icon: 'assets/icons/balance.svg', amount: '$2,000.00', bgColor: 'bg-[#FFF5D9]' },
    { label: 'Income', icon: 'assets/icons/income.svg', amount: '$2,000.00', bgColor: 'bg-[#E7EDFF]' },
    { label: 'Expense', icon: 'assets/icons/expense.svg', amount: '$2,000.00', bgColor: 'bg-[#FFE0EB]' },
    { label: 'Total Saving', icon: 'assets/icons/saving.svg', amount: '$2000.00', bgColor: 'bg-[#DCFAF8]' },
  ];

  recentTransactions =[
    { label: 'Deposit from card', icon: 'assets/icons/card-deposit.svg', amount: '$2,00.00', bgColor: 'bg-[#FFF5D9]', transactionId: 'TXN1234567890', date:"21 Jan 2026"},
    { label: 'Deposit Paypal', icon: 'assets/icons/paypal.svg', amount: '$12,000.00', bgColor: 'bg-[#E7EDFF]', transactionId: 'TXN1234567891', date:"22 Jan 2026"},
    { label: 'Transfer to Mom', icon: 'assets/icons/transfer.svg', amount: '$2,000.00', bgColor: 'bg-[#DCFAF8]', transactionId: 'TXN1234567892', date:"23 Jan 2026"}
  ];
}