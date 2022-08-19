import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../shared/guard/auth.guard';
import { BookingComponent } from './ui/booking/booking.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    canActivate: [AuthGuard],
    data: ['USER', 'ADMIN']
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
