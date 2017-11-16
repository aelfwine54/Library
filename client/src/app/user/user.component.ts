import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';
import {User} from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  providedEmail: string;
  providedPassword: string;
  connected = false;
  user: User;

  constructor(
      private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

  connect() {

    try {
        this.libraryService.connect(this.providedEmail, this.providedPassword).subscribe(user => this.user = user);
        this.connected = true;
    } catch (Exception) {
        this.connected = false;
    }
  }

  disconnect() {
      try {
          this.libraryService.disconnect(this.user.id, this.user.currentKey).subscribe(user => this.user = user);
          this.connected = false;
      } catch (Exception) {
          this.connected = true;
      }
  }
}
