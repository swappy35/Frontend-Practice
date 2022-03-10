import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductRoutingModule } from './component/products/product-routing.module';
import { RegisterComponent } from './component/register/register.component';

// 1. Define Routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', loadChildren: () => import('./component/products/product-routing.module').then(m => m.ProductRoutingModule) },
  { path: 'users', loadChildren: () => import('./component/users/user-routing.module').then(m => m.UserRoutingModule) },
  { path: '**', component: NotFoundComponent }

];

// 2. Register Routes
@NgModule({
  imports: [RouterModule.forRoot(routes), ProductRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
