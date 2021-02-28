import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBuplYHOuctRBBwfJrPDZA1Bu6O9pN4xng',
  databaseURL: 'https://angularchat-app-9ed96-default-rtdb.firebaseio.com'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
