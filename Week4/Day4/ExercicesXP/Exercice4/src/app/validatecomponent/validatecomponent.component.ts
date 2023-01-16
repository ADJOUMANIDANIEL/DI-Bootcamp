import { Component } from '@angular/core';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-validatecomponent',
  templateUrl: './validatecomponent.component.html',
  styleUrls: ['./validatecomponent.component.css']
})
export class ValidatecomponentComponent {

  email: string= "";
  pattern: string= "";
  
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('form is valid')
    } else {
      console.log('form is not valid')
    }
  }
}
