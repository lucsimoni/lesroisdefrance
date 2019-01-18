import { TestBed, async, inject } from '@angular/core/testing';

import { PeriodGuard } from './period.guard';

describe('PeriodGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodGuard]
    });
  });

  it('should ...', inject([PeriodGuard], (guard: PeriodGuard) => {
    expect(guard).toBeTruthy();
  }));
});
