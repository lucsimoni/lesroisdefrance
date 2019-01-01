import { Injectable } from '@angular/core';
import { Period } from '../../models/period.model';
import { PERIODS } from '../../data/period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  constructor() {}

  //On copie la source pour ne pas perdre d'informations
  private periods: Array<Period> = [...PERIODS];

  getAll(): Period[] {
    return [...this.periods];
  }

  getOne(id:string): Period {
    return {...this.periods.find((v) => v.id === id)};
  }

  add(period:any): Period[] {
    if(!period) throw Error("Null or undefined period");
    this.periods = [...this.periods, period];
    return this.periods;
  }

  delete(start:number, end:number): Period[] {
    if(start - end > 0) throw Error("End must be greater than start");
    this.periods = this.periods.splice(start, end - start );
    return this.periods;
}

}
