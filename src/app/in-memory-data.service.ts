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
      },
      {
        id: 2,
        title: 'Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg'
      },
      {
        id: 3,
        title: 'Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg'
      },
      {
        id: 4,
        title: '4Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
      },
      {
        id: 5,
        title: '5Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg'
      },
      {
        id: 6,
        title: '6Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg'
      },
      {
        id: 7,
        title: '7Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
      },
      {
        id: 8,
        title: '8Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg'
      },
      {
        id: 9,
        title: '9Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg'
      },
      {
        id: 10,
        title: '10Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
      },
      {
        id: 11,
        title: '11Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg'
      },
      {
        id: 12,
        title: '12Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg'
      },
      {
        id: 13,
        title: '13Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg'
      },

    ];
    return {books};
  }
}
