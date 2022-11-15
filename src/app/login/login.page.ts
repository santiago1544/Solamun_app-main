import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from './../shared/appointment.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  name = 'Nombre de usuario';
  email = 'Correo electrónico';
  constructor(
    private aptService: AppointmentService,
    private afAuth: AngularFireAuth,
    public fb: FormBuilder
    ) { }

  ngOnInit() {
     this.formularioLogin = this.fb.group({
       name: [''],
       password : ['']
     })
    var bookingRes = this.aptService.getUserByName(this.formularioLogin.value.name);
  }
  
   formSubmit(){
     console.log(this.aptService.getUserByName(this.formularioLogin.value.name))
   }

}

