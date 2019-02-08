import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { SellersPage } from "../sellers/sellers";
import { BuyProductPage } from "../buy-product/buy-product";

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-product-detail",
  templateUrl: "product-detail.html"
})
export class ProductDetailPage {
  saturation: number = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductDetailPage");
  }
  gotoSeller() {
    this.navCtrl.push(SellersPage);
  }

  buyNowPro() {
    this.navCtrl.push(BuyProductPage);
  }
}
