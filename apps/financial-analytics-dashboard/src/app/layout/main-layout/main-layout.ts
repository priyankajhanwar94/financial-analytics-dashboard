import { Component, DestroyRef, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from './header/header';
import { Sidenav } from './sidenav/sidenav';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [Header, Sidenav, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private breakpointObserver = inject(BreakpointObserver);
  private destroyRef = inject(DestroyRef);
  router: any;
  isCollapsed: boolean = true;
  navItems = [
    { label: 'Dashboard', icon: 'assets/icons/dashboard.svg', route:'/dashboard', activeIcon: 'assets/icons/active-dashboard.svg' },
    { label: 'Transactions', icon: 'assets/icons/transaction.svg', route:'/transactions', activeIcon: 'assets/icons/active-transaction.svg' },
  ];
  
  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 768px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(result => {
        this.isCollapsed = result.matches;
      });
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
