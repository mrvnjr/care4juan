import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CswdoRoutingModule } from './cswdo-routing.module';
import { CswdoComponent } from './cswdo.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    CswdoComponent
  ],
  imports: [
    CommonModule,
    CswdoRoutingModule,
    NgChartsModule

  ]
})
export class CswdoModule { }
