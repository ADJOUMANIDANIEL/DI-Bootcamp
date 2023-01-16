import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HandlingDirectivesModule } from './handling-directives/handling-directives.module';
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfItemsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HandlingDirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
