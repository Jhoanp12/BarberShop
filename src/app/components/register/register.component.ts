import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewUserService } from '../../services/new-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  createNewUser: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private NewUserService : NewUserService) {
    this.createNewUser = this.fb.group({
      user:['',Validators.required],
      password1:['',Validators.required],
      password2:['',Validators.required]
    })
  }

  ngOnInit(): void {
  }
  newUser() {
    this.submitted = true;
    if (this.createNewUser.invalid) {
      return
    }
    const User: any = {
      user: this.createNewUser.value.user,
      password1: this.createNewUser.value.password1,
      password2: this.createNewUser.value.password2,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date()
    }
    this.NewUserService.createNewUser(User).then(() => {
      console.log('Reserva registrada con exito');
    }).catch(error => {
      console.log(error);
    })
  }

}
