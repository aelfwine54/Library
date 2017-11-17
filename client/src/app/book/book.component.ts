import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Book} from '../Book';
import { LibraryService } from '../library.service';
import { UserService } from '../user.service';
import {User} from '../User';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  user: User;

  constructor(
      private route: ActivatedRoute,
      private libraryService: LibraryService,
      private userService: UserService,
      private location: Location
      ) {
      userService.userChanged$.subscribe(item => this.userChanged(item));
  }

  ngOnInit() {
    this.getBook();
    this.user = this.userService.getUser();
  }

  getBook(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.libraryService.getBook(id)
      .subscribe(book => this.book = book);
  }

  addToBucket(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.userService.addToBucket(id);
  }

  goBack(): void {
    this.location.back();
  }

  private userChanged(item: User) {
      this.user = item;
  }
}
