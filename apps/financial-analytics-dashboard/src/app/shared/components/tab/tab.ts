import { Component, input, output } from '@angular/core';
import { TabItem } from '../../../features/transactions/transactions.model';

@Component({
  selector: 'app-tab',
  imports: [],
  templateUrl: './tab.html',
  styleUrl: './tab.css',
})
export class Tab {
  tabs = input<TabItem[]>([]);
  tabChange = output<string>();
  setActiveTab(tab: string) {
    this.tabChange.emit(tab);
  }
}