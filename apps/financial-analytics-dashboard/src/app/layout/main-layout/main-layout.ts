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
export class MainLayout {}
