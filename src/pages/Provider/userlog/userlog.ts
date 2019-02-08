<<<<<<< HEAD
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import "rxjs/rx";
import { User_Class } from "./user_class";
import { User_Class2 } from "./use_class2";

@Injectable()
export class UserlogProvider {
  uid: string = "";
  u: number = 0;
  constructor(public http: Http) {
    console.log("Hello UserlogProvider Provider");
    this.uid = localStorage.getItem("id");
=======
import { Injectable } from '@angular/core';
import { Response,RequestOptions, Headers } from '@angular/http';
import { User_Class } from "./user_class";
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class UserlogProvider {
uid:string='';
u:number=0;
  constructor(public http: HttpClient) {
    console.log('Hello UserlogProvider Provider');
    this.uid=localStorage.getItem('id');



>>>>>>> 3062673d7b3b283220c7a945fd1b0b08229c2cd3
  }
  public url_signup: string = "http://localhost:8110/signup/";
  public url_login: string = "http://localhost:8110/login/";
  public url_Byid: string = "http://localhost:8110/users/";
  public url_chng_pass: string = "http://localhost:8110/change/";
  public url_past_rec:string="http://localhost:8110/pastrecords/"
  usr: User_Class[] = [];

<<<<<<< HEAD
  addUser(usr) {
    console.log("ENter");
    let body = JSON.stringify(usr);
    let h = new Headers({ "Content-Type": "application/json" });
    let ro = new RequestOptions({ headers: h });
    return this.http.post(this.url_signup, body, ro).map(res => res.json());
  }
  Login(usr: User_Class) {
    let body = JSON.stringify(usr);
    //console.log(body);
    let h = new Headers({ "Content-Type": "application/json" });
    let ro = new RequestOptions({ headers: h });

    return this.http
      .post(this.url_login, body, ro)
      .map((res: Response) => res.json());
  }
  getUserid(user) {
    return this.http.get(this.url_Byid + user).map(res => res.json());
  }
  updateUser(user) {
    console.log(user);
    let body = JSON.stringify(user);
    let h = new Headers({ "Content-Type": "application/json" });
    let ro = new RequestOptions({ headers: h });
    console.log(user.user_id);
    return this.http
      .put(this.url_Byid + parseInt(user.user_id), body, ro)
      .map(res => res.json());
=======


  addUser(usr){
    const body=JSON.stringify(usr);
    return this.http.post(this.url_signup,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  Login(usr:User_Class) {
    const body=JSON.stringify(usr);
    return this.http.post(this.url_login,body,{headers:new HttpHeaders().set('Content-type','application/json')});
  }
  getUserid(user)
  {
    return this.http.get(this.url_Byid+user);
  }
  updateUser(user){
   const body=JSON.stringify(user);
    return this.http.put(this.url_Byid+parseInt(user.user_id),body,{headers:new HttpHeaders().set('Content-type','application/json')});
>>>>>>> 3062673d7b3b283220c7a945fd1b0b08229c2cd3
  }
  changepass(user: User_Class2) {
    let body = JSON.stringify(user);
    let h = new Headers({ "Content-Type": "application/json" });
    let ro = new RequestOptions({ headers: h });
    return this.http
      .put(this.url_chng_pass + parseInt(user.user_id), body, ro)
      .map(res => res.json());
  }
  pasteorderdetails()
  {

  }
}
