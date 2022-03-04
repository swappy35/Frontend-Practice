import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css-binding',
  templateUrl: './css-binding.component.html',
  styleUrls: ['./css-binding.component.css']
})
export class CssBindingComponent implements OnInit {

  //data
  public username:string = "John Snow";
  public age:number = 30;
  public message:string = `Today is a good day`;
  public isMarried:boolean = false;
  public product:Product = {
    id:6574,
    name:`Apple mac book xyz series`,
    price:65456.25,
    status:false
  }

  public colors = {
    RED:'red',
    BLUE:'blue',
    BROWN:'brown'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

//custom type
interface Product{
  id:number;
  name:string;
  price:number;
  status:boolean;
}