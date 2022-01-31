import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-actions',
  templateUrl: './news-actions.component.html',
  styleUrls: ['./news-actions.component.scss']
})
export class NewsActionsComponent implements OnInit {
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  select(){
    if (this.selected === false) {
      this.selected = true;
    } else {
      this.selected = false;
    }

  }

}
