import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/core/services/character/character.service';
import { Character } from 'src/app/core/models/character.model';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  characters : Character [] = [];
  searchResults : Character [] = [];

  constructor(private characterService : CharacterService) {
    this.characters = characterService.getAll();
  }

  ngOnInit() {
  }

  search(event: any) {

    this.searchResults = [];
    event = this.format(event.target.value.toString());
    if(event.length > 0) {
      this.characters.forEach(character => {
        if(this.format(character.title).startsWith(event))
          this.searchResults.push(character);
      });
    }
  }

  format(element: any) {
    //On passe tout en minuscule
    element = element.toLowerCase();

    //On supprime les éventuels accents
    let accent = [
      /[\300-\306]/g, /[\340-\346]/g, // A, a
      /[\310-\313]/g, /[\350-\353]/g, // E, e
      /[\314-\317]/g, /[\354-\357]/g, // I, i
      /[\322-\330]/g, /[\362-\370]/g, // O, o
      /[\331-\334]/g, /[\371-\374]/g, // U, u
      /[\321]/g, /[\361]/g, // N, n
      /[\307]/g, /[\347]/g, // C, c
    ];
    let noaccent = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];
    for(var i = 0; i < accent.length; i++) {
      element = element.replace(accent[i], noaccent[i]);
    }
    return element;
  }
}
