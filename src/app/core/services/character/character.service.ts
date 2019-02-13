import { Injectable } from '@angular/core';
import { Character } from '../../models/character.model';
import { CHARACTERS } from '../../data/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  //On copie la source pour ne pas perdre d'informations
  private characters: Array<Character> = [...CHARACTERS];

  getOne(id:string): Character {
    return {...this.characters.find((v) => v.id === id)};
  }

  getCharactersFromPeriod(periodId:string) {
    let results = [];
    this.characters.forEach(character => {
      if(character.period === periodId) {
        results.push(character);
      }
    });
    return results;
  }

}
