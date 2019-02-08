import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, DateTime } from 'ionic-angular';
import { ProductDbProvider } from '../../providers/product-db/product-db';
import { user } from '../../all_classes/user_class';
import { inventory } from '../../all_classes/inventory_class';
import { product_detail_one } from '../../all_classes/product_first_class';
import { PlaceOrderPage } from '../place-order/place-order';
import { order } from '../../all_classes/order_class';
import moment from 'moment';

/**
 * Generated class for the BuyProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buy-product',
  templateUrl: 'buy-product.html',
})
export class BuyProductPage {
  user_details:user=new user(null,null,null,null,null,null,null,null);
  seller_details:inventory;
  productDetail:product_detail_one;
  public date:string;
  quantity: number = 1;
  price: number;
  totalAmt: number;
  canNotIncreaseQty:boolean=false;
  constructor(public navCtrl: NavController, 
    public product_db:ProductDbProvider
    ,public navParams: NavParams) {
    this.seller_details=this.navParams.get('seller');
    this.productDetail=this.navParams.get('prod');
    }

  ionViewWillEnter() {
    console.log("ionViewDidLoad BuyProductPage");
    this.product_db.getUser(1).subscribe((data:user[])=>{
      this.user_details=data[0];
      console.log(data);
      console.log(this.user_details);
    },(err)=>{

    },()=>{
    });
    this.price=this.productDetail.product_price;
    this.totalAmt = this.price * this.quantity;
  }

  increase() {
    if(this.quantity<this.seller_details.stock)
    {
      this.quantity++;
      this.totalAmt = this.price * this.quantity;
    }
    else
    {
      this.canNotIncreaseQty=true;
    }
  }

  decrease() {
    if(this.quantity>0)
    {
      this.quantity--;
      this.totalAmt = this.price * this.quantity;
    }
  }
  cancelOrder(){
    this.navCtrl.pop();
  }
  placeOrder(){
    this.date=new Date().toISOString();
    this.product_db.placeOrder(new order(0,1,this.productDetail.product_id,
      this.quantity,
      this.seller_details.retailer_id,this.date,0,0
      )).subscribe((data)=>{
        this.navCtrl.push(PlaceOrderPage);
      },(err)=>{
        console.log(err)},()=>{
      });
  }
}
