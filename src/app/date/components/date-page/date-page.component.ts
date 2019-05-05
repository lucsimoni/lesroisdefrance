import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.scss']
})
export class DatePageComponent implements OnInit {

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  constructor() { }

  ngOnInit() {
  }

}
