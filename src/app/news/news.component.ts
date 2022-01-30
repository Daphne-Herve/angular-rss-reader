import { ActivatedRoute } from '@angular/router';
// import  NewsRss from '/Users/Daphne/Documents/projets-angular/angular-rss-reader/src/app/NewsRss.ts;
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as xml2js from 'xml2js';
import { NewsRss } from '../NewsRss';
import { NewsService } from '../services/news.service';
import { ThisReceiver } from '@angular/compiler';
import { url } from 'inspector';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  RssData!: NewsRss;
  data: any;
  resultFromSubscribe: any;
  subscription: Subscription = new Subscription;
  response: any;

  constructor(private http: HttpClient, private newsService: NewsService) {}


  ngOnInit(): void {
    this.getRssAsApi();
  }


  getRssAsApi() {
    this.http.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://www.lemonde.fr/rss/une.xml')
    .subscribe(data => {
      this.response = data;
      console.log("response", data);
  })
  }
}


