import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Character } from 'src/app/core/models/character.model';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-date-page',
  templateUrl: './date-page.component.html',
  styleUrls: ['./date-page.component.scss']
})
export class DatePageComponent implements OnInit {

  // Valeur initiale
  value: number = 476;
  characters : Character [] = [];
  dateResults : Character [] = [];
  options: Options = {
    floor: 476,
    ceil: 1870
  };

  constructor(private characterService : CharacterService) {
    this.characters = characterService.getAll();
  }

  ngOnInit() {
  }

  valueChange() {
    this.dateResults = [];
    this.characters.forEach(character => {
      let dateStart = new Date(character.dateStart).getFullYear();
      let dateEnd = new Date(character.dateEnd).getFullYear();
      if(dateStart <= this.value && this.value <= dateEnd) {
        this.dateResults.push(character);
      }
    });
  }

}
