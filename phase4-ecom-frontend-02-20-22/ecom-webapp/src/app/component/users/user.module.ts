import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { CreateComponent } from './create/create.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    UsersComponent,
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
    ListComponent

  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
