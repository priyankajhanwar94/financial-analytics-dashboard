import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { debounceTime, distinctUntilChanged, merge, Subject, switchMap } from 'rxjs';
import { LoaderService } from '../../core/services/loader.service';
import { Pagination } from '../../shared/components/pagination/pagination';
import { Tab } from '../../shared/components/tab/tab';
import { TabItem, Transaction, TransactionTable } from './transactions.model';
@Component({
  selector: 'app-transactions',
  imports: [Tab, Pagination, CurrencyPipe],
  templateUrl: './transactions.html',
  styleUrl: './transactions.css',
})
export class Transactions implements OnInit {
  private http = inject(HttpClient);
  private loaderService = inject(LoaderService);
  private trigger$ = new Subject<void>();
  private search$ = new Subject<string>();

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

  //search
  searchBy = signal<string>('');

  //pagination
  pageSize = 10;
  totalTransactions = 0;
  currentPage = signal<number>(1);

  ngOnInit(): void {
    const searchStream$ = this.search$.pipe(
      debounceTime(300),
      distinctUntilChanged()
    );

    merge(this.trigger$, searchStream$)
      .pipe(
        switchMap(() => {
          this.loaderService.show();
          return this.fetchTransactions(
            this.currentPage(),
            this.selectedTab(),
            this.searchBy()
          );
        })
      )
      .subscribe({
        next: (res) => {
          this.transactions.set(res.data);
          this.totalTransactions = res.totalTransactions;
          this.loaderService.hide();
        },
        error: () => {
          this.loaderService.hide();
        }
      });

    this.trigger$.next();
  }

  onPageChange(page: number) {
    this.currentPage.set(page);
    this.trigger$.next();
  }

  onTabChange(tabId: string) {
    this.transactionTabs = this.transactionTabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabId,
    }));
    this.selectedTab.set(tabId);
    this.currentPage.set(1);
    this.trigger$.next();
  }

  fetchTransactions(page: number,
    tab: string,
    search: string) {

    return this.http
      .get<TransactionTable>(`http://localhost:5000/transactions?pageNumber=${page}&filterBy=${tab}&searchBy=${search}`);
  }

  onSearch(query: Event) {
    const value = (query.target as HTMLInputElement).value;
    this.searchBy.set(value);
    this.currentPage.set(1);
    this.search$.next(value);
  }
}