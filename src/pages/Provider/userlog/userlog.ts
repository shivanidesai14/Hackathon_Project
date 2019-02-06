import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/rx';
import { User_Class } from "./user_class";


@Injectable()
export class UserlogProvider {

  constructor(public http: Http) {
    console.log('Hello UserlogProvider Provider');
  }
 public url_signup:string="http://localhost:3000/signup/";
 public url_login:string="http://localhost:3000/login/";
 public url_Byid:string="http://localhost:3000/user/";
  usr:User_Class[]=[];
  addUser(usr){
    console.log("ENter")
    let body = JSON.stringify(usr);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
   return this.http.post(this.url_signup, body, ro).map((res) => res.json());
  }
  Login(usr:User_Class) {

    let body = JSON.stringify(usr);
    //console.log(body);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });

   return this.http.post(this.url_login,body,ro)
   .map((res:Response) => res.json());
  }
  getUserid(user)
  {
    return this.http.get(this.url_Byid+user).map((res) => res.json());
  }

}
