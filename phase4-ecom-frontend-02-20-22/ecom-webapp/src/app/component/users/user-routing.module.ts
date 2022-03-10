import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: 'users', component:UsersComponent},
  {path: 'create', component:CreateComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'details', component:DetailsComponent},
  {path: 'list', component:ListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
