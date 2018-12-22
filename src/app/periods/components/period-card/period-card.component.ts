import { Component, OnInit, Input } from '@angular/core';
import { Period } from 'src/app/core/models/period.model';

@Component({
  selector: 'app-period-card',
  templateUrl: './period-card.component.html',
  styleUrls: ['./period-card.component.scss']
})
export class PeriodCardComponent implements OnInit {

  @Input() period: Period;

  constructor() { }

  ngOnInit() {
  }

}
