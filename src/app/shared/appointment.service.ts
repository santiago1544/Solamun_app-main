import { Injectable } from '@angular/core';
import { Appointment } from '../shared/Appointment';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  usersListRef: AngularFireList<any>;
  usersRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}
  // Create
  createUser(apt: Appointment) {
    return this.usersListRef.push({
      name: apt.name,
      email: apt.email,
      user: apt.user,
      password: apt.password,
      cpassword:apt.cpassword,
    });
  }
  getUser(id: string) {
    this.usersRef = this.db.object('/appointment/' + id);
    return this.usersRef;
  }

  getUserByName(name: string){
    this.usersRef =this.db.object('/login/' + name);
    return this.usersRef;
  }
  getUserList() {
    this.usersListRef = this.db.list('/appointment');
    return this.usersListRef;
  }
}