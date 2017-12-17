import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material/material.module';

import {AppComponent} from './app.component';
import {BookDetailComponent, EditBookDialogComponent} from './book-detail/book-detail.component';
import {BooksComponent} from './books/books.component';
import {BookService} from './book.service';
import {MessageService} from './message.service';
import {MessagesComponent} from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    EditBookDialogComponent
  ],
  entryComponents: [EditBookDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),

    MaterialModule
  ],
  providers: [BookService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
