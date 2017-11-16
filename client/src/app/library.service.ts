import { Injectable } from '@angular/core';
import { Book } from './Book';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './User';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LibraryService {

    private libraryURL = 'http://localhost:3000';

  constructor(
      private http: HttpClient
  ) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>( this.libraryURL + '/books')
        .pipe(
            catchError(this.handleError('betBooks', []))
        );
  }

    getBook(id: number) {
      // TODO use
        return this.http.get<Book>( this.libraryURL + '/books/' + id)
            .pipe(
                catchError(this.handleError('getBooks/' + id, null))
            );
    }

    connect(email: string, cryptedPassword: string) {
      return this.http.get<User>(this.libraryURL + '/users/connect?email=' + email + '&cryptedPassword=' + cryptedPassword)
          .pipe(
              catchError(this.handleError('users/connect?email=' + email + '&cryptedPassword=' + cryptedPassword, null))
          );
    }

    disconnect(userId: number, key: string) {
        return this.http.get<User>(this.libraryURL + '/users/' + userId + '/disconnect?key=' + key)
            .pipe(
                catchError(this.handleError('/users/' + userId + '/disconnect?key=' + key, null))
            );
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
