import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      {
        id: 1,
        title: 'Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
        numberOfPages: 298
      },
      {
        id: 2,
        title: 'Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg',
        numberOfPages: 987
      },
      {
        id: 3,
        title: 'Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg',
        numberOfPages: 803
      },
      {
        id: 4,
        title: 'The Other Side of God',
        author: 'Susan D.Kailor',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61BlmxmQ-8L.jpg',
        numberOfPages: 668
      },
      {
        id: 5,
        title: 'Treat Yourself!',
        author: 'Jessica Siskin',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/511RwswzwML._SX411_BO1,204,203,200_.jpg',
        numberOfPages: 123
      },
      {
        id: 6,
        title: 'Being Human',
        author: 'William Wegman',
        publicationDate: 'October 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Srn9qAWFL._SX355_BO1,204,203,200_.jpg',
        numberOfPages: 385
      },
      {
        id: 7,
        title: 'Humans of New York',
        author: 'Brandon Stanton',
        publicationDate: 'October 13, 2015',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51aCR3KlifL._SX389_BO1,204,203,200_.jpg',
        numberOfPages: 158
      },
      {
        id: 8,
        title: 'The Plot to Hack America',
        author: 'Malcolm Nance',
        publicationDate: 'October 10 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/516chvtVZRL._SX332_BO1,204,203,200_.jpg',
        numberOfPages: 705
      },
      {
        id: 9,
        title: 'Becoming Magic',
        author: 'Genevieve Davis',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/41Xkxc4Kn5L.jpg',
        numberOfPages: 965
      },
      {
        id: 10,
        title: 'Unbelievable',
        author: 'Katy Tur',
        publicationDate: 'September 12, 2007',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Jw4f5abqL._SX329_BO1,204,203,200_.jpg',
        numberOfPages: 792
      },
      {
        id: 11,
        title: 'Leonardo da Vinci',
        author: 'Walter Isaacson',
        publicationDate: 'October 17, 2013',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51PHThzD-2L._SX330_BO1,204,203,200_.jpg',
        numberOfPages: 125
      },
      {
        id: 12,
        title: 'King Arthur',
        author: 'Hourly History',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/61v31u7-gSL.jpg',
        numberOfPages: 426
      },
      {
        id: 13,
        title: 'Philosophy',
        author: 'Kevin Perry',
        publicationDate: 'July 8, 1982',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51aAo0h1r4L._SX260_.jpg',
        numberOfPages: 305
      },

    ];
    return {books};
  }
}
