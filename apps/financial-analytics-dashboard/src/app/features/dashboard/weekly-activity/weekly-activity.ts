import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WeeklySpendChart } from '../dashboard.model';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-weekly-activity',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './weekly-activity.html',
  styleUrl: './weekly-activity.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeeklyActivity {
  weeklySpendChart = input.required<WeeklySpendChart>();
}