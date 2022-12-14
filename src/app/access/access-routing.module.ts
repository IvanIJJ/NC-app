import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessPage } from './access.page';

const routes: Routes = [
  {
    path: '',
    component: AccessPage
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'continue',
    loadChildren: () => import('./continue/continue.module').then( m => m.ContinuePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessPageRoutingModule {}
