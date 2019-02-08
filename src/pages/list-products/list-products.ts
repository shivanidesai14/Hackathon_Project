import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDbProvider } from "../../providers/product-db/product-db";
import { product_detail_one } from "../../all_classes/product_first_class";
import { ProductDetailPage } from '../product-detail/product-detail';
// import { Component } from "@angular/core";
// import { IonicPage, NavController, NavParams } from "ionic-angular";
// import { ProductDetailPage } from "../product-detail/product-detail";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public product_db:ProductDbProvider) {
  }

  public products:product_detail_one[];
  public matchedProducts:product_detail_one[];
  public user_selected_cat;
  public searchString="";
  public searchStart:boolean=false;

  ionViewDidLoad() {
  
    this.user_selected_cat=this.navParams.get('category_id');
    this.product_db.getProductByCatID(this.user_selected_cat).subscribe((data:product_detail_one[])=>{
      this.products=data;
    },(err)=>{
      console.log(err);
    },
    ()=>{
      console.log("Completed");
    });
    console.log('ionViewDidLoad ListProductsPage');
  }
  onProductDetail(item:any){
    this.navCtrl.push(ProductDetailPage,{product_detail:item});
  }
  search(){
    console.log(this.matchedProducts);
    if(this.searchString==""){
      this.searchStart=false;
      this.matchedProducts=[];
    }else{
      this.searchStart=true;
      this.matchedProducts=this.products.filter((x)=>x.product_name.toUpperCase().startsWith(this.searchString.toUpperCase()));
    }
  }
}
