import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RSearchComponent } from './r-search/r-search.component';
import { RInfoComponent } from './r-info/r-info.component';



@NgModule({
  declarations: [
    RSearchComponent,
    RInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
