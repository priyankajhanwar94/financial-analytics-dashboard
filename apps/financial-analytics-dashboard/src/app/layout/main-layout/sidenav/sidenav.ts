import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
})
export class Sidenav {

  collapsed = false;

  navItems = [
    { label: 'Dashboard', icon: '/assets/icons/icon.svg' },
    { label: 'Transactions', icon: '/assets/icons/icon.svg' },
    { label: 'Settings', icon: '/assets/icons/icon.svg' },
  ];

  move(){
    this.collapsed = !this.collapsed;
  }
}
