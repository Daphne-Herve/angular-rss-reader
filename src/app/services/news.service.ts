import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";
import * as xml2js from 'xml2js';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private  service:  HttpClient;
  json: any;

    constructor(param_service:  HttpClient) {
        this.service  =  param_service;
    }

    public getAndTransformXml(data: any) {
      const xml: xml2js.Parser = new xml2js.Parser();
      xml.parseString(data, (err: any, result: any) => {
        if (err) {
          throw err;
        }
      this.json =JSON.stringify(result, null, 4); //format your json output
      console.log('json', this.json)
      });
      (error: any) => {
        console.log(error,"err")
      }
    }

    public  getDataFromJson():  Observable<string> {
      const  obs1:Observable<any> = this.service.get(this.json);
      const  treatment  = ( param_data:any) => {
          return  param_data.msg  as  string;
      };
      return  obs1.pipe( map( treatment) );
  }
}


