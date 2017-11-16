import { Injectable } from '@angular/core';
import { Book } from './Book';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LibraryService {

    BOOKS = [
        {id: 0, title:  'David Copperfield', author: 'Charles Dickens', year: 1850, price: 19.99,
            imgUrl: 'http://3.bp.blogspot.com/-rP86bw2191I/UbvSjZw0okI/AAAAAAAAEoY/ESplku0oZ1s/s1600/copperfield.jpg'},
        {id: 1, title:  'A study in Scarlet', author: 'Arthur Conan Doyle', year: 1887, price: 15.49,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/ArthurConanDoyle_AStudyInScarlet_annual.jpg'},
        {id: 2, title:  'Le comte de Monte-Cristo', author: 'Alexandre Dumas', year: 1845, price: 34.35,
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg'},
        {id: 3, title:  'Mathias Sandorf', author: 'Jules Verne', year: 1885, price: 20.95,
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/5194CoDcbqL._SY344_BO1,204,203,200_.jpg'}
    ];

  constructor() {
  }

    // getHeroes(): Observable<Hero[]> {
    //     // Todo: send the message _after_ fetching the heroes
    //     this.messageService.add('HeroService: fetched heroes');
    //     return of(HEROES);
    // }

  getBooks(): Observable<Book[]> {
    return of(this.BOOKS);
  }

    getBook(id: number) {
        return of(this.BOOKS[id]);
    }
}
