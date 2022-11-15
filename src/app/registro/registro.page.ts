import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { Appointment } from '../shared/Appointment';
import { AppointmentService } from './../shared/appointment.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;
  Bookings = [];
  constructor(
    private aptService: AppointmentService,
    private router: Router,
    public fb: FormBuilder
    ) { }
    ngOnInit() {
      this.formularioRegistro = this.fb.group({
        name: [''],
        email: [''],
        user: [''],
        password : [''],
        cpassword : [''],
      })

    this.fetchBookings();
    let bookingRes = this.aptService.getUserList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Bookings = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Bookings.push(a as Appointment);
      })
    })
    }
    
    formSubmit() {
      if (!this.formularioRegistro.valid) {
        return false;
      } else {
        this.aptService.createUser(this.formularioRegistro.value).then(res => {
          console.log(res)
          this.formularioRegistro.reset();
          this.router.navigate(['/home']);
        })
          .catch(error => console.log(error));
      }
    }

    fetchBookings() {
      this.aptService.getUserList().valueChanges().subscribe(res => {
        console.log(res)
      })
    }
}