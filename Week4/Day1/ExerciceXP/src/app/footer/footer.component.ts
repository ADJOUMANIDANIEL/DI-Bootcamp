import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  copyright= "@2022 tous droits reserves";

  constructor() { }

  ngOnInit(): void {
  }

}
