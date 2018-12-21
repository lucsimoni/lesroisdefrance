import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HautMoyenAgeComponent } from './haut-moyen-age.component';

describe('HautMoyenAgeComponent', () => {
  let component: HautMoyenAgeComponent;
  let fixture: ComponentFixture<HautMoyenAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HautMoyenAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HautMoyenAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
