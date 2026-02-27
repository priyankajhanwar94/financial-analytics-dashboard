import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidenav {
  collapsed = input<boolean>(false);
  navItems = input<any[]>([]);
}
