import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions, Headers } from '@angular/http';
import 'rxjs/rx';
import { User_Class } from "./user_class";


@Injectable()
export class UserlogProvider {
uid:string='';
u:number=0;
  constructor(public http: Http) {
    console.log('Hello UserlogProvider Provider');
    this.uid=localStorage.getItem('id');



  }
 public url_signup:string="http://localhost:8110/signup/";
 public url_login:string="http://localhost:8110/login/";
 public url_Byid:string="http://localhost:8110/users/";
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
  updateUser(user){
    let body = JSON.stringify(user);
    let h = new Headers({ 'Content-Type': 'application/json' });
    let ro = new RequestOptions({ headers: h });
    console.log(user.user_id);
   return this.http.put(this.url_Byid+parseInt(user.user_id), body, ro).map((res) => res.json());
  }


}
