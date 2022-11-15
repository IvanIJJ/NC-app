import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
       {
    path: 'event/:id',
    loadChildren: () => import('./event/event.module').then( m => m.EventPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'planner',
    loadChildren: () => import('./planner/planner.module').then( m => m.PlannerPageModule)
  },
  {
    path: 'trip/:id',
    loadChildren: () => import('./trip/trip.module').then( m => m.TripPageModule)
  },
  {
    path: 'eventall/:id',
    loadChildren: () => import('./eventall/eventall.module').then( m => m.EventallPageModule)
  },
  {
    path: 'tripall/:id',
    loadChildren: () => import('./tripall/tripall.module').then( m => m.TripallPageModule)
  },
  {
    path: 'accomodation/:id',
    loadChildren: () => import('./accomodation/accomodation.module').then( m => m.AccomodationPageModule)
  },
  {
    path: 'accomodationall/:id',
    loadChildren: () => import('./accomodationall/accomodationall.module').then( m => m.AccomodationallPageModule)
  },
   {
    path: 'restuarants/:id',
    loadChildren: () => import('./restuarants/restuarants.module').then( m => m.RestuarantsPageModule)
  },
  {
    path: 'restuarantsall/:id',
    loadChildren: () => import('./restuarantsall/restuarantsall.module').then( m => m.RestuarantsallPageModule)
  },
  
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
    ]
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
