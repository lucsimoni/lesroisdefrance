import { Component, OnInit } from '@angular/core';
import { PeriodService } from 'src/app/core/services/period/period.service';
import { Period } from 'src/app/core/models/Period.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  periods : Period[] = [];

  constructor(private periodService: PeriodService) {
    this.periods = this.periodService.getAll();
  }

  ngOnInit() {
  }

}
