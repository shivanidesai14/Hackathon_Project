import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";



@IonicPage()
@Component({
  selector: "page-profildetails",
  templateUrl: "profildetails.html"
})
export class ProfildetailsPage {
  uid: string = "";
  email: string = "";
  name: string = "";
  mno: string = "";
  pino: string = "";
  address: string = "";
  //usr: User_Class[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast: ToastController,
   // public udata: UserlogProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProfildetailsPage");
    } 
}
