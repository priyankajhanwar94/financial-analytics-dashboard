import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeeklyActivity } from './weekly-activity';

describe('WeeklyActivity', () => {
  let component: WeeklyActivity;
  let fixture: ComponentFixture<WeeklyActivity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyActivity],
    }).compileComponents();

    fixture = TestBed.createComponent(WeeklyActivity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
