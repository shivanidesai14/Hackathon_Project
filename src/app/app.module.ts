import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";

//MD Code
import { HttpClientModule } from '@angular/common/http';
import { SelectSearchableModule } from 'ionic-select-searchable';
//Ends Here
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ProductsPage } from "../pages/products/products";
import { ListProductsPage } from "../pages/list-products/list-products";
import { ServicesPage } from "../pages/services/services";
import { ProfilePage } from "../pages/profile/profile";
import { ProductDbProvider } from '../providers/product-db/product-db';
import { ProductDetailPage } from "../pages/product-detail/product-detail";
import { SellerPage } from "../pages/seller/seller";
import { BuyProductPage } from "../pages/buy-product/buy-product";
import { PlaceOrderPage } from "../pages/place-order/place-order";
// import moment from 'moment';
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
    ProfilePage,
    ProductDetailPage,
    SellerPage,
    BuyProductPage,
    PlaceOrderPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp),HttpClientModule,SelectSearchableModule],
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
    ProductDetailPage,
    SellerPage,
    BuyProductPage,
    PlaceOrderPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProductDbProvider,
    HttpClientModule,
    SelectSearchableModule
  ]
})
export class AppModule {}
