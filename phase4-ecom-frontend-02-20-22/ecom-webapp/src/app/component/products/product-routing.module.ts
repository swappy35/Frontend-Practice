import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

const routes = [
  { path:'products', component:ProductsComponent},
  { path:'create', component:CreateComponent},
  { path:'update', component:UpdateComponent},
  { path:'details', component:DetailsComponent},
  { path:'list', component:ListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
