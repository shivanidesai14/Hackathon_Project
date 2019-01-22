import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { SignupPage } from "../signup/signup";
import { TabsPage } from "../tabs/tabs";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alert: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  onLogin() {
    this.navCtrl.setRoot(TabsPage);
  }
  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  showPrompt() {
    let prompt = this.alert.create({
      title: "Forgot Password",
      message: "Enter Your Email Id To Get Your Password",
      inputs: [
        {
          name: "name",
          placeholder: "Email_id"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Send",
          handler: data => {
            /*this.email = data.name;
            this.forgotPassword();*/
          }
        }
      ]
    });
    prompt.present();
  }
}
