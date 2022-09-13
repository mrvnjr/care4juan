import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BarangaydashComponent } from './barangaydash/barangaydash.component';
import { SoloparentComponent } from './soloparent/soloparent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BarangaydashComponent,
    SoloparentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
