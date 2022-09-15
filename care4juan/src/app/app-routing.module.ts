import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
  path: 'home',
  loadChildren: () =>
    import('./home/home.module').then(
      (m) => m.HomeModule
    ),
  },{
    path: 'osca',
    loadChildren: () =>
      import('./osca/osca.module').then(
        (m) => m.OscaModule
      ),
    },
    {
      path: 'cswdo',
      loadChildren: () =>
        import('./cswdo/cswdo.module').then(
          (m) => m.CswdoModule
        ),
      },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
