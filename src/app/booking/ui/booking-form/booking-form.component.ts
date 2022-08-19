import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../infraestructure/booking.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  createReservation: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder,
    private BookingService: BookingService) {
    this.createReservation = this.fb.group({
      Service: ['', Validators.required],
      Barber: ['', Validators.required],
      Date: ['', Validators.required],
      Hour: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  agregarReservation() {
    this.submitted = true;
    if (this.createReservation.invalid) {
      return
    }
    const reservation: any = {
      services: this.createReservation.value.Service,
      barber: this.createReservation.value.Barber,
      date: this.createReservation.value.Data,
      hour: this.createReservation.value.Hora,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.BookingService.createReservation(reservation).then(() => {
      console.log('Reserva registrada con exito');
    }).catch(error => {
      console.log(error);
    })
  }
}
