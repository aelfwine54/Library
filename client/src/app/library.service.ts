import { Injectable } from '@angular/core';
import { Book } from './Book';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LibraryService {

  constructor() {
  }

    // getHeroes(): Observable<Hero[]> {
    //     // Todo: send the message _after_ fetching the heroes
    //     this.messageService.add('HeroService: fetched heroes');
    //     return of(HEROES);
    // }

  getBooks(): Observable<Book[]> {
    return of([
        {id: 0, title:  'David Copperfield', author: 'Charles Dickens', year: 1850, price: 19.99},
        {id: 1, title:  'A study in Scarlet', author: 'Arthur Conan Doyle', year: 1887, price: 15.49},
        {id: 2, title:  'Le comte de Monte-Cristo', author: 'Alexandre Dumas', year: 1845, price: 34.35},
        {id: 3, title:  'Mathias Sandorf', author: 'Jules Verne', year: 1885, price: 20.95}
    ]);
  }

}
