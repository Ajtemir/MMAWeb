import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {AboutPageComponent} from "./pages/about-page/about-page.component";
import {ProductPageComponent} from "./pages/product-page/product-page.component";
import {ProductDetailComponent} from "./Components/product-detail/product-detail.component";

const routes: Routes = [
    { path: '', component: ProductPageComponent },
    { path: 'about', component: AboutPageComponent },
    { path: 'product-detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
