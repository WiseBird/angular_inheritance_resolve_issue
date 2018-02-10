import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChildComponent} from "../components/child.component";
import {ComopnentService} from "../components/service";


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComopnentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
