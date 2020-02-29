import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vieworder',
  templateUrl: './vieworder.component.html',
  styleUrls: ['./vieworder.component.css']
})
export class VieworderComponent implements OnInit {
  public viewOrder = [];
  constructor() { }
 
  ngOnInit(): void {
    
    this.viewOrder = JSON.parse(localStorage.Basket);
  }

}
