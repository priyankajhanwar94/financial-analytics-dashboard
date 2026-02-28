import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { RecentTransaction, Transaction } from './recent-transactions.model';
import { RecentTransactionsService } from './recent-transactions.service';

@Component({
  selector: 'app-recent-transactions',
  imports: [CommonModule],
  templateUrl: './recent-transactions.html',
  providers: [RecentTransactionsService],
  styleUrl: './recent-transactions.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentTransactions {
  private recentTransactionsService = inject(RecentTransactionsService);
  private txnUIConfig = {
    card: {
      icon: 'assets/icons/card-deposit.svg',
      bgColor: 'bg-[#FFF5D9]'
    },
    paypal: {
      icon: 'assets/icons/paypal.svg',
      bgColor: 'bg-[#E7EDFF]'
    },
    transfer: {
      icon: 'assets/icons/transfer.svg',
      bgColor: 'bg-[#DCFAF8]'
    }
  };

  recentTransactions$ = this.recentTransactionsService.fetchRecentTransactions().pipe(
    map(txns => this.mapToUI(txns)
    ));

  mapToUI(txns: Transaction[]): RecentTransaction[] {
    return txns.map(txn => ({
      label: txn.description,
      type: txn.type,
      icon: this.txnUIConfig[txn.type].icon,
      bgColor: this.txnUIConfig[txn.type].bgColor,
      amount: `$${txn.amount.toLocaleString()}`,
      transactionId: txn.id,
      date: new Date(txn.date).toLocaleDateString()
    }));
  }
}
