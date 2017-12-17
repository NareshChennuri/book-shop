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
        title: '4Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
        numberOfPages: 668
      },
      {
        id: 5,
        title: '5Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg',
        numberOfPages: 598
      },
      {
        id: 6,
        title: '6Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg',
        numberOfPages: 358
      },
      {
        id: 7,
        title: '7Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
        numberOfPages: 321
      },
      {
        id: 8,
        title: '8Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg',
        numberOfPages: 794
      },
      {
        id: 9,
        title: '9Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg',
        numberOfPages: 965
      },
      {
        id: 10,
        title: '10Ice Man Cometh',
        author: 'C.T.WENTE',
        publicationDate: 'Dec 31, 1969',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51XKTTP-SkL._SY346_.jpg',
        numberOfPages: 478
      },
      {
        id: 11,
        title: '11Annie\'s Verdict',
        author: 'John Ellsworth',
        publicationDate: 'August 3, 2017',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51Eh8qOSJlL.jpg',
        numberOfPages: 974
      },
      {
        id: 12,
        title: '12Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg',
        numberOfPages: 346
      },
      {
        id: 13,
        title: '13Eat, Pray, Die ',
        author: ' Chelsea Field',
        publicationDate: 'July 3, 2016',
        cover: 'https://images-na.ssl-images-amazon.com/images/I/51qcNAv2o6L._SY346_.jpg',
        numberOfPages: 279
      },

    ];
    return {books};
  }
}
