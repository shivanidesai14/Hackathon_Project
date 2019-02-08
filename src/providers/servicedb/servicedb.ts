import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';


@Injectable()
export class ServicedbProvider {
  public url:string="http://localhost:8110/services/";
  public url2:string="http://localhost:8110/getservicesman/"
  constructor(public http: HttpClient) {
    console.log('Hello ServicedbProvider Provider');
  }
  getAllCategories()
  {
    return this.http.get(this.url);
  }
  //this will have argument as well also d concatenatio of city
  getserviceman()
  {
    
  }
}
