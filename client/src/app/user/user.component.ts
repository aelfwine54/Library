import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  connected = false;

  constructor(
      private libraryService: LibraryService
  ) { }

  ngOnInit() {
  }

  connect() {
    this.connected = true;
    // TODO actual connexion
  }

  disconnect() {
    this.connected = false;
    // TODO actual disconnection
  }
}
