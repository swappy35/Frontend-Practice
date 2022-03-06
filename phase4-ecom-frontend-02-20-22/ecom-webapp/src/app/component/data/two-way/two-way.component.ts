import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  public username:string="";
  public message:string="";

  constructor() { }

  ngOnInit(): void {
  }

  onChange($event:any){
    this.username = $event.target.value;
  }

  onDemand($event1:any){
    this.username = $event1.target.value;
  }
}
