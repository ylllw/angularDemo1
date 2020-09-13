import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductFormComponent} from './product-form/product-form.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {PorductCRUDComponent} from './porduct-crud/porduct-crud.component';
import {ProductShowComponent} from './product-show/product-show.component';
import {ProductUpdateFormComponent} from './product-update-form/product-update-form.component';
const routes: Routes = [

  {path:'productcrud',component:PorductCRUDComponent},
  {path:'productadd',component:ProductFormComponent},
  {path:'productdetail/:id',component:ProductDetailComponent},
  {path:'productshow',component:ProductShowComponent},
  {path:'productUpdate/:id',component:ProductUpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
