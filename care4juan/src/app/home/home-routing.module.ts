import { BarangaydashComponent } from './barangaydash/barangaydash.component';
import { SoloparentComponent } from './soloparent/soloparent.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PwdComponent } from './pdao-pwd/pwd.component';
import { SolocswdoComponent } from './cswdo-solo/solo.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'soloparent', component: SoloparentComponent },
      { path: 'barangay-dashboard', component: BarangaydashComponent},
      { path: 'pdao-pwd', component: PwdComponent},
      { path: 'cswdo-solo', component: SolocswdoComponent},
      { path: '', redirectTo: 'barangay-dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
