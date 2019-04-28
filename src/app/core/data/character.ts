import { Character } from '../models/character.model';

export const CHARACTERS: Character[] = [{
    id:"clovis",
    title: "Clovis Ier",
    nickname: "unknown",
    period:"haut-moyen-age",
    imageUrl: 'assets/images/character-cards/clovis.jpg',
    dateStart: new Date().setFullYear(400),
    dateEnd: new Date().setFullYear(500),
    prestige: 4
  }, {
    id:"pepin-le-bref",
    title: 'Pépin le Bref',
    nickname: "unknown",
    period:"haut-moyen-age",
    imageUrl: 'assets/images/character-cards/pepin.jpg',
    dateStart: new Date().setFullYear(600),
    dateEnd: new Date().setFullYear(700),
    prestige: 3
  }, {
    id:"charlemagne",
    title: 'Charlemagne',
    nickname: "unknown",
    period:"haut-moyen-age",
    imageUrl: 'assets/images/character-cards/charlemagne.jpg',
    dateStart: new Date().setFullYear(700),
    dateEnd: new Date().setFullYear(800),
    prestige: 5
   }, {
    id:"louis-ix",
    title: 'Louis IX',
    nickname: "unknown",
    period:"moyen-age-classique",
    imageUrl: 'assets/images/character-cards/louis-ix.jpg',
    dateStart: new Date().setFullYear(1100),
    dateEnd: new Date().setFullYear(1200),
    prestige: 4
  }];