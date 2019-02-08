import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ProductDetailPage } from "../product-detail/product-detail";

/**
 * Generated class for the ListProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list-products",
  templateUrl: "list-products.html"
})
export class ListProductsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ListProductsPage");
  }

  onProductClick() {
    this.navCtrl.push(ProductDetailPage);
  }
}
