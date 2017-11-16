import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.css']
})
export class BucketListComponent implements OnInit {

  bucketList = [];

  constructor(
      private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
      this.location.back();
  }
}
