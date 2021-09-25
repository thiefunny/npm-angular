import { Component, OnInit } from '@angular/core';
import { Wheel } from '../wheel.model';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {

  wheels = [
    new Wheel('pierwsze koło', 10),
    new Wheel('drugie koło', 11),
  ]

  addWheel() {
    this.wheels.push(new Wheel('kolejne koło', Math.round(Math.random()*10)));
  }

  constructor() { }

  ngOnInit(): void {
  }

}
