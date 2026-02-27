import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Sidenav, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  router: any;
  collapsed: boolean = false;
  navItems = [
    { label: 'Dashboard', icon: 'assets/icons/dashboard.svg', route:'/dashboard', activeIcon: 'assets/icons/active-dashboard.svg' },
    { label: 'Transactions', icon: 'assets/icons/transaction.svg', route:'/transactions', activeIcon: 'assets/icons/active-transaction.svg' },
  ];
  
  toggleSidebar() {
    this.collapsed = !this.collapsed;
  }
}
