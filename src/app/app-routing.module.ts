import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'access',
    loadChildren: () => import('./access/access.module').then( m => m.AccessPageModule)
  },
  {
    path: 'main-screen',
    loadChildren: () => import('./main-screen/main-screen.module').then( m => m.MainScreenPageModule)
  },
  {
    path: 'municipality',
    loadChildren: () => import('./municipality/municipality.module').then( m => m.MunicipalityPageModule)
  },
  {
    path: 'tourism',
    loadChildren: () => import('./tourism/tourism.module').then( m => m.TourismPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
