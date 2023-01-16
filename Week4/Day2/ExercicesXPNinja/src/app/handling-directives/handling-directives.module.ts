import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleVisibilityDirective } from './toogle-visibility.directive';
import { AddCustomAttributeDirective } from './add-custom-attribute.directive';
import { AddCustomStyleDirective } from './add-custom-style.directive';
import { AddCustomEventDirective } from './add-custom-event.directive';



@NgModule({
  declarations: [
    ToogleVisibilityDirective,
    AddCustomAttributeDirective,
    AddCustomStyleDirective,
    AddCustomEventDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToogleVisibilityDirective,
    AddCustomAttributeDirective,
    AddCustomStyleDirective,
    AddCustomEventDirective
  ]
})
export class HandlingDirectivesModule { }
