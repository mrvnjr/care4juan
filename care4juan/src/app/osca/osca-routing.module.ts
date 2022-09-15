import { DashComponent } from './dash/dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscaComponent } from './osca.component';
const routes: Routes = [
  {
    path: '',
    component: OscaComponent,
    children: [
      { path: 'dash', component: DashComponent },

      { path: '', redirectTo: 'dash', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OscaRoutingModule {}
