import {NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {ProductComponent} from "./Components/product/product.component";
import {AboutPageComponent} from "./pages/about-page/about-page.component";

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'about', component: AboutPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
