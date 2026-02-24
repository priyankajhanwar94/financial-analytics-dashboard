import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BalanceHistory } from './balance-history';

describe('BalanceHistory', () => {
  let component: BalanceHistory;
  let fixture: ComponentFixture<BalanceHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceHistory],
    }).compileComponents();

    fixture = TestBed.createComponent(BalanceHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
