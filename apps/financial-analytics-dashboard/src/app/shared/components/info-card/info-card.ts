import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
  styleUrl: './info-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoCard {
  card = input<any>({});
}
