import { NgModule, ErrorHandler, forwardRef, Injectable } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { CallNumber } from "@ionic-native/call-number/ngx";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProductsPage } from "../pages/products/products";
import { ListProductsPage } from "../pages/list-products/list-products";
import { ServicesPage } from "../pages/services/services";
import { ProfilePage } from "../pages/profile/profile";
import { DetailservicePage } from "../pages/detailservice/detailservice";
import { BuyProductPage } from "../pages/buy-product/buy-product";
import { SellersPage } from "../pages/sellers/sellers";
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { PlaceOrderPage  } from "../pages/place-order/place-order";
import {ProfildetailsPage} from "../pages/profildetails/profildetails";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    ServicesPage,
    ProfilePage, DetailservicePage,
    BuyProductPage,SellersPage,
    ProductDetailPage,PlaceOrderPage,ProfildetailsPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    ProductsPage,
    ListProductsPage,
    ServicesPage,
    ProfilePage,
    DetailservicePage,
    BuyProductPage,SellersPage,ProductDetailPage,
    PlaceOrderPage,ProfildetailsPage
  ],
  providers: [
    StatusBar,
  SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CallNumber


  ]
})
export class AppModule { }
