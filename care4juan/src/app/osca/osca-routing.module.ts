import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaComponent } from './osca.component';
import { ScAssistComponent } from './sc-assist/sc-assist.component';
import { ScDetailsComponent } from './sc-details/sc-details.component';
import { ScReportComponent } from './sc-report/sc-report.component';
const routes: Routes = [
  {
    path: '',
    component: OscaComponent,
    children: [
      { path: 'dash', component: DashComponent },
      { path: 'sc-assist', component: ScAssistComponent },
      { path: 'sc-details', component: ScDetailsComponent },
      { path: 'sc-report', component: ScReportComponent },

      { path: '', redirectTo: 'dash', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OscaRoutingModule {}
