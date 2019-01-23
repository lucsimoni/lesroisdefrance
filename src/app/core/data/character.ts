import { Character } from '../models/character.model';

export const CHARACTERS: Character[] = [{
    id:"clovis",
    title: "Clovis",
    period:"haut-moyen-age",
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
    imageUrl: 'assets/images/period-cards/medieval-haut.png',
  }, {
    id:"pepin-le-bref",
    title: 'Pépin le Bref',
    period:"haut-moyen-age",
    imageUrl: 'assets/images/period-cards/medieval-classique.png',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }, {
    id:"charlemagne",
    title: 'Charlemagne',
    period:"haut-moyen-age",
    imageUrl: 'assets/images/period-cards/medieval-bas.png',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }];