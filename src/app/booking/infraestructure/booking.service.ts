import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private fireStore: AngularFirestore) { }

  createReservation(reservation:any): Promise<any>{
    return this.fireStore.collection('reservation').add(reservation);
  }
}
