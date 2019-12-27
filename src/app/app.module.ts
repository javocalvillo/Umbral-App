import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'
import { PagesComponent } from './pages/pages.component';
import { NotpageComponent } from './shared/notpage/notpage.component';

//Rutas
import { APP_ROUTES } from './app.routing.module';

//SharedModule
import { SharedModule } from './shared/shared.module';





@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotpageComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    APP_ROUTES,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
