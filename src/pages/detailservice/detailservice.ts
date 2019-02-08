import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Retailer } from './retailer_c';
import { ServicedbProvider } from '../../providers/servicedb/servicedb';

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
  serviceid:number;
usrpin:string='';

usrcity:string='';
public arr:Retailer[]=[];
public arr1:Retailer[]=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _data:ServicedbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailservicePage');
    this.serviceid=this.navParams.get('id');
    this.usrpin=localStorage.getItem('upino'); //get from localstorage
    this.usrcity=localStorage.getItem('ucid');//get cityid from localstorage
    
  }

}
