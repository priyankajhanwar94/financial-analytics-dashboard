import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, Sidenav, RouterModule, CommonModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
@HostListener('window:resize')
export class MainLayout implements OnInit {
  isSidebarOpen: boolean = false;
  navItems = [
    { label: 'Dashboard', icon: 'assets/icons/dashboard.svg', route: '/main/dashboard', activeIcon: 'assets/icons/active-dashboard.svg' },
    { label: 'Transactions', icon: 'assets/icons/transaction.svg', route: '/main/transactions', activeIcon: 'assets/icons/active-transaction.svg' },
  ];
  pageTitle = 'Dashboard';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.pageTitle = this.getTitle(this.route);
      });
  }

  onResize() {
    this.updateSidebarState();
  }
  ngOnInit(): void {
    this.updateSidebarState();
  }
  private getTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'] ?? 'Dashboard';
  }

  private updateSidebarState() {
    this.isSidebarOpen = window.innerWidth >= 1024;
  }
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  onSidebarItemClick() {
    if (window.innerWidth < 1024) {
      this.isSidebarOpen = false;
    }
  }
}
