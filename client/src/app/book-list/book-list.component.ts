import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Book } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    selectedBook: Book;

    books: Book[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.getBooks();
  }

    getBooks(): void {
      this.libraryService.getBooks()
          .subscribe(books => this.books = books);
  }
}
