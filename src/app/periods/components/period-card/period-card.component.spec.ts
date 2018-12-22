import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodCardComponent } from './period-card.component';

describe('PeriodCardComponent', () => {
  let component: PeriodCardComponent;
  let fixture: ComponentFixture<PeriodCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
