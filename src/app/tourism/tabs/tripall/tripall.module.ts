import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TripallPageRoutingModule } from './tripall-routing.module';

import { TripallPage } from './tripall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TripallPageRoutingModule
  ],
  declarations: [TripallPage]
})
export class TripallPageModule {}
