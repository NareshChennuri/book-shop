import {Component, OnInit} from '@angular/core';

import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Book[];
  displayBooks: Book[];
  booksCount = 0;
  pageIndex = 0;
  pageSize = 5;
  pageSizeOptions = [5, 10, 25, 100];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.getBooks();
  }

  getBooksFromTo(pageIndex: number, pageSize: number): void {
    const from: number = (pageIndex > 1) ? pageIndex * pageSize : (pageIndex === 1) ? pageSize : pageIndex;
    const to: number = from + pageSize;
    this.displayBooks = this.books.slice(from, to);
  }

  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        // sort books in ASC order by its title
        books.sort(function (a, b) {
          return (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0);
        });
        this.books = books;
        this.booksCount = books.length;
        this.getBooksFromTo(this.pageIndex, this.pageSize);
      });
  }

  pageChanged(event): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getBooksFromTo(this.pageIndex, this.pageSize);
  }
}
