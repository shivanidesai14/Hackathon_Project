import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { inventory } from '../../all_classes/inventory_class';
import { BuyProductPage } from '../buy-product/buy-product';
import { product_detail_one } from '../../all_classes/product_first_class';

/**
 * Generated class for the SellerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seller',
  templateUrl: 'seller.html',
})
export class SellerPage {
  proudcts:inventory[];
  productDetail:product_detail_one;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.productDetail=this.navParams.get('prod');
    this.proudcts=this.navParams.get('sellers');
    // this.proudcts=this.navParams.get('seller');
    console.log('ionViewDidLoad SellerPage');
  }
  buyNowPro(i:any){
    this.navCtrl.push(BuyProductPage,{prod:this.productDetail,seller:this.proudcts[i]});
  }

}
