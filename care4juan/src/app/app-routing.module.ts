import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarangaydashComponent } from './barangaydash/barangaydash.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'barangaydash', component: BarangaydashComponent },
  { path: '', redirectTo:'/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
