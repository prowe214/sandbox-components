import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { ButtonPageModule } from './pages/button-page/button-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonPageComponent
  ],
  imports: [
    BrowserModule,
    ButtonPageModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
