import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { PlaceOrderPage } from "../place-order/place-order";

/**
 * Generated class for the BuyProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-buy-product",
  templateUrl: "buy-product.html"
})
export class BuyProductPage {
  quantity: number = 1;
  price: number = 62974;
  totalAmt: number;
  delievery: boolean;
  userContact: number = 8460816553;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BuyProductPage");
    this.totalAmt = this.price * this.quantity;
    this.delievery = false;
  }

  increase() {
    this.quantity++;
    this.totalAmt = this.price * this.quantity;
  }

  decrease() {
    this.quantity--;
    this.totalAmt = this.price * this.quantity;
  }

  placeOrder() {
    this.navCtrl.push(PlaceOrderPage);
  }

  cancelOrder() {
    this.navCtrl.pop();
  }
}
