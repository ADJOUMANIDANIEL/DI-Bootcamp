import { Component,  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-form-component',
  templateUrl: './color-form-component.component.html',
  styleUrls: ['./color-form-component.component.css']
})

export class ColorFormComponentComponent implements OnInit{
  form: FormGroup;
  favoriteColor: string= "";
  formBuilder: FormBuilder;

  constructor( formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.form = new FormGroup({});
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      favoriteColor: ['', Validators.required]
    });
  }

  submit() {
    console.log(this.form.value.favoriteColor);
    this.favoriteColor = this.form.value.favoriteColor;
  }
    
}


 
