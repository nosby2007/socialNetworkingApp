import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registerForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'firstName' : new FormGroup (null),
      'lastName': new FormGroup (null),
      'email' : new FormGroup (null),
      'password' : new FormGroup (null),
      'age' : new FormGroup (null),
      'gender': new FormGroup (null),
      'phone' : new FormGroup (null),    
    });
  }


}
