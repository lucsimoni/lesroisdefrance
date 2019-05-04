import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodHomeComponent } from './period-home.component';

describe('PeriodHomeComponent', () => {
  let component: PeriodHomeComponent;
  let fixture: ComponentFixture<PeriodHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
