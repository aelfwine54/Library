import { Component, OnInit, Input } from '@angular/core';


import {BucketItem} from '../BucketItem';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-bucket-item',
  templateUrl: './bucket-item.component.html',
  styleUrls: ['./bucket-item.component.css']
})
export class BucketItemComponent implements OnInit {
  @Input() item: BucketItem;

  constructor(
      private libraryService: LibraryService,
  ) { }

  ngOnInit() {
      // this.getBucketItem();
  }

  deleteBucketItem(id: number): void {
    // TODO delete item
  }



}
