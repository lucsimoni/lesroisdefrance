import { Period } from '../models/period.model';

export const PERIODS: Period[] = [{
    id:"haut-moyen-age",
    title: "Haut Moyen Âge",
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
    imageUrl: 'assets/images/period-cards/medieval-haut.png',
  }, {
    id:"moyen-age-classique",
    title: 'Period2',
    imageUrl: 'assets/images/period-cards/medieval-classique.png',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }, {
    id:"period3",
    title: 'Period3',
    imageUrl: 'assets/images/period-cards/medieval-bas.png',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }];