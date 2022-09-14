import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';


import { HomeComponent } from './home.component';
import { BarangayComponent } from './charts/barangay/barangay.component';
import { BarangaydashComponent } from './barangaydash/barangaydash.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HomeComponent,
    BarangayComponent,
    BarangaydashComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgChartsModule
  ]
})
export class HomeModule { }
