import { Component, OnInit } from '@angular/core';
import { PeriodService } from 'src/app/core/services/period/period.service';
import { Period } from 'src/app/core/models/Period.model';

@Component({
  selector: 'app-period-home',
  templateUrl: './period-home.component.html',
  styleUrls: ['./period-home.component.scss']
})
export class PeriodHomeComponent implements OnInit {

  periods : Period [] = [];

  constructor(private periodService : PeriodService) {
    this.periods = periodService.getAll();
  }

  ngOnInit() {
  }

}
