import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SoloparentComponent } from './home/soloparent/soloparent.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';

import { NgChartsModule } from 'ng2-charts';
import { OscaFormComponent } from './home/osca-form/osca-form.component';
import { ResidentsInfoComponent } from './home/residents-info/residents-info.component';
import { OscaComponent } from './osca/osca.component';
import { DashComponent } from './osca/dash/dash.component';
import { CswdoComponent } from './cswdo/cswdo.component';
import { DashboardComponent } from './cswdo/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OscaFormComponent,
    ResidentsInfoComponent,

    DashComponent,
      CswdoComponent,
      DashboardComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
