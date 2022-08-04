import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { User } from 'src/app/models/user';
import { USERS } from 'src/app/user-mock';
import { __asyncGenerator } from 'tslib';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  /*user:User = {
    id: 101,
    firstName: 'Jepthe',
    lastName: 'Nkwanmen',
    email:'nosby2007@gmail.com',
    password:'Yolande20017',
    age: 33,
    gender: 'Male',
    phone: 971557730791,
  }*/

  users = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
