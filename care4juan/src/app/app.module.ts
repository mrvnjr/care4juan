import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { BarangaydashComponent } from './home/barangaydash/barangaydash.component';
import { SoloparentComponent } from './home/soloparent/soloparent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PdaoComponent } from './pdao/pdao.component';
import { NgChartsModule } from 'ng2-charts';
import { PwdComponent } from './pdao/pwd/pwd.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SoloparentComponent,
    PdaoComponent,
    PwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
