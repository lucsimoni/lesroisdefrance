import { Period } from '../models/period.model';

export const PERIODS: Period[] = [{
    id:"haut-moyen-age",
    title: "Haut Moyen Âge",
    dateStart: new Date().setFullYear(476),
    dateEnd: new Date().setFullYear(987),
    imageUrl: 'assets/images/period-cards/medieval-haut.jpg',
  }, {
    id:"moyen-age-classique",
    title: 'Moyen Âge Classique',
    imageUrl: 'assets/images/period-cards/medieval-classique.jpg',
    dateStart: new Date().setFullYear(987),
    dateEnd: new Date().setFullYear(1328),
  }, {
    id:"bas-moyen-age",
    title: 'Bas Moyen Âge',
    imageUrl: 'assets/images/period-cards/medieval-bas.jpg',
    dateStart: new Date().setFullYear(1328),
    dateEnd: new Date().setFullYear(1492),
  }, {
    id:"renaissance",
    title: 'Renaissance',
    imageUrl: 'assets/images/period-cards/renaissance.jpg',
    dateStart: new Date().setFullYear(1492),
    dateEnd: new Date().setFullYear(1610),
  }, {
    id:"moderne",
    title: 'Temps Modernes',
    imageUrl: 'assets/images/period-cards/temps-modernes.jpg',
    dateStart: new Date().setFullYear(1610),
    dateEnd: new Date().setFullYear(1789),
  }, {
    id:"revolutionnaire",
    title: 'Temps Révolutionnaires',
    imageUrl: 'assets/images/period-cards/temps-revolutionnaires.jpg',
    dateStart: new Date().setFullYear(1789),
    dateEnd: new Date().setFullYear(1870),
  }];