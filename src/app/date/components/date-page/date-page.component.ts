import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.scss']
})
export class DatePageComponent implements OnInit {

  value: number = 476;
  options: Options = {
    floor: 476,
    ceil: 1870
  };

  constructor() { }

  ngOnInit() {
  }

  valueChange() {
    console.log("changement de valeur");
  }

}
