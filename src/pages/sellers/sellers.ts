import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuyProductPage } from '../buy-product/buy-product';

/**
 * Generated class for the SellersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellers',
  templateUrl: 'sellers.html',
})
export class SellersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellersPage');
  }

  buyNowPro() {
    this.navCtrl.push(BuyProductPage);
  }

}
