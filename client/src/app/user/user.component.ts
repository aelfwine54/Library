import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
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
      private userService: UserService
  ) {
      userService.userChanged$.subscribe(item => this.userChanged(item));
  }

  ngOnInit() {
  }

  connect() {

    try {
        this.user = this.userService.connect(this.providedEmail, this.providedPassword);
        this.connected = true;
    } catch (Exception) {
        this.connected = false;
    }
  }

  disconnect() {
      try {
          this.user = this.userService.disconnect(this.user.id, this.user.currentKey);
          this.connected = false;
      } catch (Exception) {
          this.connected = true;
      }
  }

  private userChanged(item: User) {
     this.user = item;
  }
}
