import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-weekly-activity',
  imports: [],
  templateUrl: './weekly-activity.html',
  styleUrl: './weekly-activity.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeeklyActivity {
  weeklySpendChart=input<any[]>([])
}
