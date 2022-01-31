import { Component } from '@angular/core';
import { NewsRss } from './NewsRss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isconnected : boolean = false;
  title = 'News Reader';


  connect() {
    this.isconnected = true;
  }
}
