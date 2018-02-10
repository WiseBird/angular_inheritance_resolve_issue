import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ChildOneComponent} from "../components/child-one.comopnent";
import {ChildTwoComponent} from "../components/child-two.component";
import {ComopnentService} from "../components/service";


@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ComopnentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
