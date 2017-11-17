import { Component, OnInit, Input } from '@angular/core';


import {BucketItem} from '../BucketItem';
import {UserService} from '../user.service';

@Component({
  selector: 'app-bucket-item',
  templateUrl: './bucket-item.component.html',
  styleUrls: ['./bucket-item.component.css']
})
export class BucketItemComponent implements OnInit {
  @Input() item: BucketItem;

  constructor(
      private userService: UserService,
  ) { }

  ngOnInit() {

  }

  deleteBucketItem(id: number): void {
    this.userService.deleteBucketItem(id);
  }



}
