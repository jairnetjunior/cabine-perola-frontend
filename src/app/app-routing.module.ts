import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { 
    path: 'procedimentos',
    loadChildren: './procedimentos/procedimentos.module#ProcedimentosPageModule' 
  },
  { 
    path: 'home',
    loadChildren: './home/home.module#HomePageModule' 
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
