import {EventEmitter, Injectable} from '@angular/core';
import {User} from './User';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  private libraryURL = 'http://localhost:3000/users';
  currentUser: User;
  public userChanged$: EventEmitter<User>;

  constructor(
      private http: HttpClient
  ) {
      this.currentUser = new User();
      this.currentUser.connected = false;
      this.userChanged$ = new EventEmitter<User>();
  }

  connect(email: string, cryptedPassword: string): void {
      const req = this.http.get<User>(this.libraryURL + '/connect?email=' + email + '&cryptedPassword=' + cryptedPassword)
          .pipe(
              catchError(this.handleError('/connect?email=' + email + '&cryptedPassword=' + cryptedPassword, null))
          );
      req.subscribe(user => this.updateUser(user));
  }

  updateUser(user: User): void {
      this.currentUser = user;
      this.sendUser();
  }
  sendUser(): void {
      this.userChanged$.emit(this.currentUser);
  }

  disconnect(userId: number, key: string): void {
      const req = this.http.get<User>(this.libraryURL + '/' + userId + '/disconnect?key=' + key)
          .pipe(
              catchError(this.handleError('/' + userId + '/disconnect?key=' + key, null))
          );
      req.subscribe(user => this.updateUser(new User));

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
          console.log(operation);

          // Let the app keep running by returning an empty result.
          return of(result as T);
      };
  }

  addToBucket(id: number): void {
      const req = this.http.post(this.libraryURL + '/' + this.currentUser.id + '/bucket?key=' + this.currentUser.currentKey, {'bookId': id})
          .pipe(
            catchError(this.handleError('/' + this.currentUser.id + '/bucket?key=' + this.currentUser.currentKey, null))
          );
      req.subscribe(bucket => this.bucketChanged(bucket));
  }

  private bucketChanged(bucket: any): void {
      this.currentUser.bucket = bucket;
      this.sendUser();
  }

  getUser(): User {
      return this.currentUser;
  }

    deleteBucketItem(id: number) {
        const req = this.http.delete(this.libraryURL + '/' + this.currentUser.id + '/bucket/' + id + '?key=' + this.currentUser.currentKey)
            .pipe(catchError(this.handleError('/' + this.currentUser.id + '/bucket/' + id + '?key=' + this.currentUser.currentKey, null))
            );
        req.subscribe(bucket => this.bucketChanged(bucket));
    }
}
