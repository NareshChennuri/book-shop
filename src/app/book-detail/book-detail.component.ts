import {Component, OnInit, Input, Inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Book} from '../book';
import {BookService} from '../book.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private location: Location,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.bookService.updateBook(this.book)
      .subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditBookDialogComponent, {
      width: '350px',
      data: this.book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.book = result;
      this.save();
    });
  }
}

@Component({
  selector: 'app-edit-book-dialog',
  templateUrl: './edit-book-detail.component.html',
})
export class EditBookDialogComponent {
  @Input() book: Book;
  editBook = new Book();

  constructor(public dialogRef: MatDialogRef<EditBookDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data;
    this.editBook.id = this.book.id;
    this.editBook.title = this.book.title;
    this.editBook.author = this.book.author;
    this.editBook.publicationDate = this.book.publicationDate;
    this.editBook.cover = this.book.cover;
    this.editBook.numberOfPages = this.book.numberOfPages;
  }

  onSaveClick(): void {
    this.dialogRef.close(this.book);
  }

  onCancelClick(): void {
    this.book = this.editBook;
    this.dialogRef.close(this.book);
  }

}
