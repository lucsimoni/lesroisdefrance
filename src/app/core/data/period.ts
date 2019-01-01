import { Period } from '../models/period.model';

export const PERIODS: Period[] = [{
    id:"period1",
    title: "Period1",
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
    imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/51sH9JfhQ6L._SS500.jpg',
  }, {
    id:"period2",
    title: 'Period2',
    imageUrl: 'https://img.cdandlp.com/2017/06/imgL/118865816.jpg',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }, {
    id:"period3",
    title: 'Period3',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9f/Hendrix_in_the_west.jpg',
    dateStart: new Date().setFullYear(1987,1,7),
    dateEnd: new Date().setFullYear(1987,1,7),
  }];