import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightDirective } from './highlight.directive';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    HighlightDirective,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
