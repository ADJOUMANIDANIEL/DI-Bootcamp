import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

clicSurBouton(){
    alert("Vous venez de cliquer sur le bouton creer par Yves Armand");
  }
}
