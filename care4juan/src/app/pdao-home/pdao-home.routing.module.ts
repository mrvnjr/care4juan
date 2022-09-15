import { PdaDashboardComponent } from './pda-dashboard/pda-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdaoHomeComponent } from './pdao-home.component';
import { PdaopwdComponent } from './pdaopwd/pdaopwd.component';
import { PdaoAssisstantComponent } from './pdao-assisstant/pdao-assisstant.component';
const routes: Routes = [
  {
    path: '',
    component: PdaoHomeComponent,
    children: [
      { path: 'pda-dashboard', component: PdaDashboardComponent },
      { path: 'pdaopwd', component: PdaopwdComponent },
      { path: 'pdao-assisstant', component: PdaoAssisstantComponent },
      { path: '', redirectTo: 'pda-dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdaoHomeRoutingModule {}