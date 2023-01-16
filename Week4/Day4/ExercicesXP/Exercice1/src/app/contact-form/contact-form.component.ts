import { Component } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  name: string = " ";
  email: string = " ";
  message: string = " ";

  submit() {
    console.log(this.name, this.email, this.message);
  }
 
}
