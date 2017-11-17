import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BucketItemComponent } from './bucket-item/bucket-item.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { UserComponent } from './user/user.component';
import {LibraryService} from './library.service';
import { AppRoutingModule } from './/app-routing.module';
import {FormsModule} from '@angular/forms';
import { UserService } from './user.service';


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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LibraryService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
