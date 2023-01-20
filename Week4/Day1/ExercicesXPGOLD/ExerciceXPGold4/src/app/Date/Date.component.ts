import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Date',
  templateUrl: './Date.component.html',
  styleUrls: ['./Date.component.css']
})
export class DateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   today = new Date();
}
