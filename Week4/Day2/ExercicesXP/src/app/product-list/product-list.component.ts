import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      name: "Banane",
      price: 148.0
    },
    {
      name: "Orange",
      price: 429.0
    },
    {
      name: "Pomme",
      price: 50.0
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
