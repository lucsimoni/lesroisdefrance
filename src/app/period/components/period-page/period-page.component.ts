import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Period } from 'src/app/core/models/period.model';
import { PeriodService } from 'src/app/core/services/period/period.service';

@Component({
  selector: 'app-period-page',
  templateUrl: './period-page.component.html',
  styleUrls: ['./period-page.component.scss']
})
export class PeriodPageComponent implements OnInit {

  period : Period;

  constructor(
    private route:ActivatedRoute,
    private periodServ:PeriodService
  ) {}

  ngOnInit() {
    let periodId:string = this.route.snapshot.paramMap.get('id');
    this.period = this.periodServ.getOne(periodId);
    console.log(periodId);
    console.log(this.period);
  }

}
