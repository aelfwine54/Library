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
  user: User;

  constructor(
      private userService: UserService
  ) {
      userService.userChanged$.subscribe(item => this.userChanged(item));
  }

  ngOnInit() {
      this.user = this.userService.getUser();
  }

  onSubmit() {
    this.userService.connect(this.providedEmail, this.providedPassword);
  }

  disconnect() {
    this.userService.disconnect(this.user.id, this.user.currentKey);
    this.providedEmail = null;
    this.providedPassword = null;
  }

  private userChanged(item: User) {
     this.user = item;
     console.log(item);
  }
}
