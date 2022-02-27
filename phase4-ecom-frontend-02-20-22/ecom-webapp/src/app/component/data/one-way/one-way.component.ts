import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way',
  templateUrl: './one-way.component.html',
  styleUrls: ['./one-way.component.css']
})
export class OneWayComponent implements OnInit {

  //data properties
  public title:string = `Apple MacBook XYZ series`;
  public desc:string = `This is a Laptop`;
  public price:number = 78945.25;
  constructor() { }

  ngOnInit(): void {
  }

}
