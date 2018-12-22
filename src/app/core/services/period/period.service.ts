import { Injectable } from '@angular/core';
import { Period } from '../../models/period.model';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  //TODO : Mettre dans un fichier data.ts
  private periods: Array<Period> = [{
    id:"period1",
    title: "Period1",
    date: new Date().setFullYear(1987,1,7),
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51sH9JfhQ6L._SS500.jpg',
  }, {
    id:"period2",
    title: 'Period2',
    imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
    date: new Date().setFullYear(1954,10,27),
  }, {
    id:"period3",
    title: 'Period3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
    date: new Date().setFullYear(1937,11,6)
  }];

  constructor() { }

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
