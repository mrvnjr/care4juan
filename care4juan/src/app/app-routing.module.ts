import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarangaydashComponent } from './barangaydash/barangaydash.component';
import { SoloparentComponent } from './soloparent/soloparent.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'barangaydash', component: BarangaydashComponent },
  { path: 'soloparent', component: SoloparentComponent },
  { path: '', redirectTo:'/barangaydash', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
