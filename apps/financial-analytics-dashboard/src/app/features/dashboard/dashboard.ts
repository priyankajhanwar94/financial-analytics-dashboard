import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { InfoCard } from '../../shared/components/info-card/info-card';
import { BalanceHistory } from './balance-history/balance-history';
import { ExpenseStatics } from './expense-statics/expense-statics';
import { RecentTransactions } from './recent-transactions/recent-transactions';
import { WeeklyActivity } from './weekly-activity/weekly-activity';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [InfoCard, NgApexchartsModule, RecentTransactions, BalanceHistory, ExpenseStatics, WeeklyActivity],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  infoCard = [
    { label: 'My Balance', icon: 'assets/icons/balance.svg', amount: '$2,000.00', bgColor: 'bg-[#FFF5D9]' },
    { label: 'Income', icon: 'assets/icons/income.svg', amount: '$2,000.00', bgColor: 'bg-[#E7EDFF]' },
    { label: 'Expense', icon: 'assets/icons/expense.svg', amount: '$2,000.00', bgColor: 'bg-[#FFE0EB]' },
    { label: 'Total Saving', icon: 'assets/icons/saving.svg', amount: '$2000.00', bgColor: 'bg-[#DCFAF8]' },
  ];
}