import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';
import { RemoveSpecialCharsPipe } from './pipes/remove-special-chars.pipe';
import { TitlecasePipe } from './pipes/titlecase.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LimitTextPipe,
    RemoveSpecialCharsPipe,
    TitlecasePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LimitTextPipe, RemoveSpecialCharsPipe, TitlecasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
