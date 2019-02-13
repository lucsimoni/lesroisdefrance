import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Period } from 'src/app/core/models/period.model';
import { PeriodService } from 'src/app/core/services/period/period.service';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-period-page',
  templateUrl: './period-page.component.html',
  styleUrls: ['./period-page.component.scss']
})
export class PeriodPageComponent implements OnInit {

  period : Period;
  characters : Character [] = [];

  constructor(
    private route:ActivatedRoute,
    private periodService:PeriodService,
    private characterService:CharacterService
  ) {}

  ngOnInit() {
    let periodId:string = this.route.snapshot.paramMap.get('id');
    this.period = this.periodService.getOne(periodId);
    this.characters = this.characterService.getCharactersFromPeriod(periodId);
  }

}
