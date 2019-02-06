import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';


// import { HttpClient,HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Http ,Response,Headers,RequestOptions } from '@angular/http';
// import { Observable } from "rxjs/Observable";
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';

/*
  Generated class for the ServicedbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicedbProvider {
  public url:string="http://localhost:3000/services/";
  constructor(public http: HttpClient) {
    console.log('Hello ServicedbProvider Provider');
  }
  getAllCategories()
  {
    return this.http.get(this.url);
  }
}
