import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LimitTextPipe } from './pipes/limit-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LimitTextPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LimitTextPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
