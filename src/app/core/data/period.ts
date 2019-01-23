import { Period } from '../models/period.model';

export const PERIODS: Period[] = [{
    id:"haut-moyen-age",
    title: "Haut Moyen Âge",
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
    imageUrl: 'assets/images/period-cards/medieval-haut.png',
  }, {
    id:"moyen-age-classique",
    title: 'Moyen Âge Classique',
    imageUrl: 'assets/images/period-cards/medieval-classique.png',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }, {
    id:"bas-moyen-age",
    title: 'Bas Moyen Âge',
    imageUrl: 'assets/images/period-cards/medieval-bas.png',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }];