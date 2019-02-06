import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from './service_c';
import { ServicedbProvider } from '../../providers/servicedb/servicedb';
/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
        arr:Service[]=[];
    //    grid: Array<Array<string>>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public _data:ServicedbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');

    this._data.getAllCategories().subscribe(

      (data: Service[]) => {
        this.arr = data;
        console.log("hiee services");
       console.log(this.arr);
      },
      function (e) {
        alert(e);
      },
      function () {
       
      }

    );

  }

}
