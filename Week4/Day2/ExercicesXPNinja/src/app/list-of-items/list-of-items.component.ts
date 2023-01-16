import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css'],
})
export class ListOfItemsComponent {
 
 
  items=[
  {
    check:false,
    label:"Iphone X"
  },
  {
    check:false,
    label:"Samsung A72"
  },
  {
    check:true,
    label:"Hp Laptop d1531"
  },
  {
    check:false,
    label:"Imprimante VHT"
  },
  {
    check:true,
    label:"SAC GUCCI XXL"
  },
  {
    check:false,
    label:"Drone MegaTron CX78za"
  },
  {
    check:true,
    label:"Itel Hp45"
  }
]

}
