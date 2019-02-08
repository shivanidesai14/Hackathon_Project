import { Component } from "@angular/core";

// import { AboutPage } from "../about/about";
// import { ContactPage } from "../contact/contact";
// import { HomePage } from "../home/home";
import { ProductsPage } from "../products/products";
import { ServicesPage } from "../services/services";
import { ProfilePage } from "../profile/profile";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  /* tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage; */

  tab1Root = ProductsPage;
  tab2Root = ServicesPage;
  tab3Root = ProfilePage;

  constructor() {}
}
