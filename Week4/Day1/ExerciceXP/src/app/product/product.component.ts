import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {
    "name": "Chair",
    "price": 1.3495
  }

  constructor() { }

  ngOnInit(): void {
  }

}
