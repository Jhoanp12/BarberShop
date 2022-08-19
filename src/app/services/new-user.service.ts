import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  constructor(private fireStore: AngularFirestore) { }

  createNewUser(user:any): Promise<any>{
    return this.fireStore.collection('user').add(user);
  }
}
