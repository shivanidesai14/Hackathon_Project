import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from './service_c';
import { ServicedbProvider } from '../../providers/servicedb/servicedb';
import { DetailservicePage } from "../detailservice/detailservice";
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
       
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public _data:ServicedbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');

    this._data.getAllCategories().subscribe(

      (data: any) => {
       
        this.arr=data.Data;

      },
      function (e) {
        alert(e);
      },
      function () {
       
      }

    );

  }
 detailservice(sid) {
   this.navCtrl.push(DetailservicePage, {
     id: sid
   })
 }


}
