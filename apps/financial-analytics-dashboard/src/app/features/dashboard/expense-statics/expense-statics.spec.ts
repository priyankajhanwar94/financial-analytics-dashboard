import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpenseStatics } from './expense-statics';

describe('ExpenseStatics', () => {
  let component: ExpenseStatics;
  let fixture: ComponentFixture<ExpenseStatics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseStatics],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseStatics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
