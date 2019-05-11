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

  getAll(): Character[] {
    return [...this.characters];
  }

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

  getCharactersFromDate(year:number) {
    let results = [];
    this.characters.forEach(character => {
      let dateStart = new Date(character.dateStart).getFullYear();
      let dateEnd = new Date(character.dateEnd).getFullYear();
      if(dateStart <= year && year <= dateEnd) {
        results.push(character);
      }
    });
    return results;
  }

  exists(characterId:string):boolean {
    var characterFound:boolean = false;
    this.getAll().forEach(element => {
      if(characterId === element.id) {
        characterFound = true;
      }
    });
    return characterFound;
  }

}
