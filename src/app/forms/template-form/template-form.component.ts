import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  submited = false;
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: null,
    gender: '',
    phone: null,
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm) {
    //console.log(form);
    this.submited= true;
    this.user.firstName = form.value.firstName;
    this.user.lastName = form.value.lastName;
    this.user.email = form.value.email;
    this.user.password = form.value.password;
    this.user.age = form.value.age
    this.user.gender = form.value.gender;
    this.user.phone = form.value.phone;

  }
}
