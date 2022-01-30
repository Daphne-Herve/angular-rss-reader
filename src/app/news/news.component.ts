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
  result: any;
  resultFromSubscribe: any;
  subscription: Subscription = new Subscription;

  constructor(private http: HttpClient,private route: ActivatedRoute, private newsService: NewsService) {}


  ngOnInit(): void {
  //   this.route.queryParamMap.subscribe((params: any) => {
    this.GetRssFeedData();
    this.transformResult();
    console.log(this.result);

    // this.subscription = this.result.subscribe(
    //   (value:any) => {
    //       console.log(value);
    //   },
    //   (error: any) => {
    //       console.error(error);
    //   },
    //   () => {
    //       console.log("The observable is closed")
    //   }
    // );

  //  });
    // this.newsService.getAndTransformXml;
    // this.newsService.getDataFromJson;

  }

  GetRssFeedData() {
    const url = "https://www.lemonde.fr/rss/une.xml"
    const headerInfo = {
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      'Access-Control-Allow-Credentials': 'true'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerInfo),
    };

    return this.result = this.http.get(url, requestOptions)
  }


    transformResult() {
      xml2js.parseString(this.result,  (err, result) => {
          console.log("rssFeed", this.result);
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }


    // this.http.get(
    //   'https://www.lemonde.fr/rss/une.xml',
    //   {
    //     headers: new HttpHeaders({
    //           'Access-Control-Allow-Origin': 'http://localhost:4200',
    //           'Access-Control-Allow-Methods': 'GET',
    //           'Access-Control-Allow-Headers': 'Content-Type, x-requested-with'
    //         }),
    //     responseType: 'text'
    //   }
    // ).subscribe(posts => {
    //   xml2js.parseString(posts, function (err, result) {
    //     console.log("rssFeed", result);
    //     console.log("RESULT TORN UP", result.rss.channel[0].item);
    //     const objJSON = result.rss.channel[0].item;
    //     console.log("RESULT TYPE", typeof(result.rss.channel[0].item));
    //     console.log("result objJson", objJSON)
    //   });
    // });




    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // }

    // const requestOptions = {
    //   headers: new Headers(headerDict),
    // };

    // return this.http.get(this.heroesUrl, requestOptions)
    // const requestOptions: Object = {
    //   observe: 'body',
    //   responseType: 'text',
    //   headers: new HttpHeaders ({
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET',
    //     'Access-Control-Allow-Headers': 'Content-Type, x-requested-with'
    //   })
    // };
    // const _url = "https://www.lemonde.fr/rss/une.xml";
    // this.http
    //   .get(
    //     _url,
    //     requestOptions
    //   )
    //   .subscribe((data) => {
    //     let parseString = xml2js.parseString;
    //     parseString(data, (err, result: NewsRss) => {
    //       this.RssData = result;
    //     });
    //   });
    //   console.log(requestOptions);



   getDataDiff(endDate: string | number | Date) {
    let setDate= new Date(endDate).toISOString();
    var diff = (new Date()).getTime() - new Date(setDate).getTime();
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    let dayString =  days == 0 ?  "" : days + "days ";
    let hoursString =  hours == 0 ?  "" : hours + "hr ";
    let minutesString =  minutes == 0 ?  "" : minutes + "m ";

    return dayString + hoursString + minutesString;
  }

}

