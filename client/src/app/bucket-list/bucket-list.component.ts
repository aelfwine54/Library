import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {UserService} from '../user.service';
import {User} from '../User';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  bucketList = [];

  constructor(
      private location: Location,
      private userService: UserService
  ) {
      userService.userChanged$.subscribe(item => this.userChanged(item));
  }

  ngOnInit() {
    this.bucketList = this.userService.getUser().bucket;
  }

  goBack(): void {
      this.location.back();
  }

  private userChanged(user: User) {
      this.bucketList = user.bucket;
      console.log(this.bucketList);
  }
}
