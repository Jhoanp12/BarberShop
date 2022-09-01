import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=>m.HomeModule),
  },
  {
    path: 'booking',
    loadChildren: () => import('./booking/booking.module').then((m)=>m.BookingModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then((m)=>m.ProductsModule),
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then((m)=>m.LocationModule),
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'**', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
