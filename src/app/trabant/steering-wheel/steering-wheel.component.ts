import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steering-wheel',
  templateUrl: './steering-wheel.component.html',
  styleUrls: ['./steering-wheel.component.css']
})

export class SteeringWheelComponent implements OnInit {

toTheRight = Math.round(Math.random());

  constructor() { }

  ngOnInit(): void {
  }

}
