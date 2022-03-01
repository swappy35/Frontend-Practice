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
  public isActive:boolean = false;
  public customer = {
    id : 4468,
    name : 'John Snow',
    age : 25
  }
  constructor() { }

  ngOnInit(): void {
  }

}
