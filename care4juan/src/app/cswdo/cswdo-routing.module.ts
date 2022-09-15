import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CswdoComponent } from './cswdo.component';
const routes: Routes = [
  {
    path: '',
    component: CswdoComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CswdoRoutingModule {}