import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';
import { Transaction, TabItem, ApiResponse, TransactionTable } from './transactions.model';
import { Tab } from '../../shared/components/tab/tab';
import { Pagination } from '../../shared/components/pagination/pagination';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-transactions',
  imports: [Tab, Pagination, CurrencyPipe],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions implements OnInit {
  private http = inject(HttpClient);
  private loaderService = inject(LoaderService);
  transactions = signal<Transaction[]>([]);
  
  //tabs
  selectedTab = signal<string>('all');
  transactionTabs: TabItem[] = [{
    label: 'All Transactions',
    id: 'all',
    isActive: true
  },
  {
    label: 'Income',
    id: 'Credit',
    isActive: false
  },
  {
    label: 'Expense',
    id: 'Debit',
    isActive: false
  }];

  //pagination
  pageSize = 10;
  totalTransactions = 0;
  currentPage = signal<number>(1);

  ngOnInit(): void {
    this.fetchTransactions();
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
    this.fetchTransactions();
  }

  onTabChange(tabId: string) {
    this.transactionTabs = this.transactionTabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabId,
    }));
    this.selectedTab.set(tabId);
    this.fetchTransactions();
  }
  fetchTransactions() {
    this.loaderService.show();
    this.http
      .get<TransactionTable>(`http://localhost:5000/transactions?pageNumber=${this.currentPage()}&filterBy=${this.selectedTab()}`)
      .subscribe({
        next: (res) => {
          this.loaderService.hide();
          this.transactions.set(res.data);
          this.totalTransactions = res.totalTransactions;
        },
        error: (err) => {
          console.error('Error fetching transactions:', err);
          this.loaderService.hide();
        }
      });
  }
}