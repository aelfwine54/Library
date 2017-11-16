import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BucketItemComponent } from './bucket-item/bucket-item.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { UserComponent } from './user/user.component';
import {LibraryService} from './library.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BucketItemComponent,
    BucketListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
