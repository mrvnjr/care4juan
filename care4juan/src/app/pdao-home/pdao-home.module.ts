import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdaoHomeComponent } from './pdao-home.component';
import { NgChartsModule } from 'ng2-charts';
import { PdaoHomeRoutingModule } from './pdao-home.routing.module';

@NgModule({
  declarations: [
    PdaoHomeComponent,
  ],
  imports: [
    CommonModule,
    PdaoHomeRoutingModule,
    NgChartsModule,
  ]
})
export class PdaoHomeModule { }
