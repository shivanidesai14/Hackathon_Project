import { NgModule, ErrorHandler, forwardRef, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
<<<<<<< HEAD


import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
=======
>>>>>>> 3062673d7b3b283220c7a945fd1b0b08229c2cd3
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { SelectSearchableModule } from 'ionic-select-searchable';
import { DetailservicePage } from "../pages/detailservice/detailservice";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProductsPage } from "../pages/products/products";
import { ListProductsPage } from "../pages/list-products/list-products";
import { SellersPage } from "../pages/sellers/sellers";
import { ServicesPage } from "../pages/services/services";
import { ProfilePage } from "../pages/profile/profile";
<<<<<<< HEAD
import { ProfildetailsPage } from "../pages/profildetails/profildetails";
import { ChangepasswordPage } from "../pages/changepassword/changepassword";
import { PastorderPage } from "../pages/pastorder/pastorder";
import { FeedbackPage } from "../pages/feedback/feedback";

=======
import { ProductDbProvider } from '../providers/product-db/product-db';
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { SellerPage } from "../pages/seller/seller";
import { BuyProductPage } from "../pages/buy-product/buy-product";
import { PlaceOrderPage } from "../pages/place-order/place-order";
import {ProfildetailsPage} from "../pages/profildetails/profildetails";
>>>>>>> 3062673d7b3b283220c7a945fd1b0b08229c2cd3
import { UserlogProvider } from "../pages/Provider/userlog/userlog";
import { ServicedbProvider } from "../providers/servicedb/servicedb";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    ProductDetailPage,
    BuyProductPage,
    PlaceOrderPage,
    ServicesPage,
    ProfilePage,
    SellerPage,
    BuyProductPage,
    PlaceOrderPage,
    DetailservicePage,
    BuyProductPage,
    SellersPage,
    ProfildetailsPage,
    ChangepasswordPage,
    PastorderPage,
    FeedbackPage
  ],
  bootstrap: [IonicApp],
  imports:[
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp),
    SelectSearchableModule
  ],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    BuyProductPage,
    PlaceOrderPage,
    ServicesPage,
    ProfilePage,
<<<<<<< HEAD
    SellersPage,
    ProfildetailsPage,
    ChangepasswordPage,
    PastorderPage,
    FeedbackPage
=======
    ProductDetailPage,
    SellerPage,
    BuyProductPage,
    PlaceOrderPage,
    DetailservicePage,
    ProfildetailsPage
    
>>>>>>> 3062673d7b3b283220c7a945fd1b0b08229c2cd3
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
<<<<<<< HEAD
    UserlogProvider
=======
    ProductDbProvider,
    BuyProductPage,SellersPage,ProductDetailPage,
    PlaceOrderPage,ProfildetailsPage,
    StatusBar,
  SplashScreen,
  UserlogProvider,
  ServicedbProvider,
>>>>>>> 3062673d7b3b283220c7a945fd1b0b08229c2cd3
  ]
})
export class AppModule { }
