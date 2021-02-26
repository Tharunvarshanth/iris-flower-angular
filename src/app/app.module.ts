import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http' ;
import { AppComponent } from './app.component';
import {ImageShareService} from './datasharingservice/ImageShareService';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    routingcomponents,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ImageShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
