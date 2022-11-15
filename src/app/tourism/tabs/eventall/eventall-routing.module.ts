import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventallPage } from './eventall.page';

const routes: Routes = [
  {
    path: '',
    component: EventallPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventallPageRoutingModule {}
