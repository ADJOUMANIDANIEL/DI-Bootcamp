import { Component } from '@angular/core';

@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})

export class ColorFormComponent {
  favoriteColor: string= "";
  displayColor: string= "";

  submit() {
    console.log(this.favoriteColor);
    this.displayColor = this.favoriteColor;
  }
}
