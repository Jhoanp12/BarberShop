import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingListComponent } from './ui/booking-list/booking-list.component';
import { BookingFormComponent } from './ui/booking-form/booking-form.component';
import { BookingComponent } from './ui/booking/booking.component';


@NgModule({
  declarations: [

    BookingListComponent,
       BookingFormComponent,
       BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
