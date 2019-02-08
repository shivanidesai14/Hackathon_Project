import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CallNumber } from '@ionic-native/call-number/ngx';

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
myNum:number=98250546;
  constructor(public navCtrl: NavController, public navParams: NavParams, public Call: CallNumber) {
  }

  call() {
    this.Call.callNumber('1234567890', true).then(() => {
      console.log('working');

    }).catch((err) => {
      alert(JSON.stringify(err))
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailservicePage');
  }
  onClick() {
    alert("hello");
  }

}
