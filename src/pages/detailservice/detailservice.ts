import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Retailer } from './retailer_c';

/**
 * Generated class for the DetailservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailservice',
  templateUrl: 'detailservice.html',
})
export class DetailservicePage {
public arr:Retailer[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailservicePage');
  }

}
