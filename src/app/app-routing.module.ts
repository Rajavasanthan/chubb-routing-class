import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ServiceComponent } from "./service/service.component";
import { ContactComponent } from "./contact/contact.component";
import { IndServiceComponent } from "./ind-service/ind-service.component";
import { IndServiceTwoComponent } from "./ind-service-two/ind-service-two.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "product",
    component: ProductsComponent,
  },
  {
    path : "product/:id",
    component : ProductDetailComponent
  },
  {
    path: "service",
    component: ServiceComponent,
    children: [
      {
        path: "service1",
        component: IndServiceComponent,
      },
      {
        path: "service2",
        component: IndServiceTwoComponent,
      },
    ],
  },
  
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path : "contact/name",
    component : HomeComponent
  },
  {
    path : "contact/name/person",
    component : HomeComponent
  },
  {
    path : "contact/name/person/:person",
    component : ServiceComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
