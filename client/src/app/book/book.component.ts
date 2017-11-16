import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Book} from '../Book';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;

  constructor(
      private route: ActivatedRoute,
      private libraryService: LibraryService,
      private location: Location
  ) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.libraryService.getBook(id)
        .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

}
