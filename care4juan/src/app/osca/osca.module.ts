import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OscaRoutingModule } from './osca-routing.module';
import { OscaComponent } from './osca.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    OscaComponent
  ],
  imports: [
    CommonModule,
    OscaRoutingModule,
    NgChartsModule
  ]
})
export class OscaModule { }
