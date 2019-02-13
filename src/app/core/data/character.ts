import { Character } from '../models/character.model';

export const CHARACTERS: Character[] = [{
    id:"clovis",
    title: "Clovis",
    nickname: "unknown",
    period:"haut-moyen-age",
    imageUrl: 'assets/images/character-cards/clovis.jpg',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }, {
    id:"pepin-le-bref",
    title: 'Pépin le Bref',
    nickname: "unknown",
    period:"haut-moyen-age",
    imageUrl: 'assets/images/character-cards/pepin.jpg',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }, {
    id:"charlemagne",
    title: 'Charlemagne',
    nickname: "unknown",
    period:"haut-moyen-age",
    imageUrl: 'assets/images/character-cards/charlemagne.jpg',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
   }, {
    id:"louis-ix",
    title: 'Louis IX',
    nickname: "unknown",
    period:"moyen-age-classique",
    imageUrl: 'assets/images/character-cards/louis-ix.jpg',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }];