import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  message = 'this is message'
              

  ngOnInit(): void {
  }
  eventBinding() {
    alert('i am eventBinding');
  }

}
