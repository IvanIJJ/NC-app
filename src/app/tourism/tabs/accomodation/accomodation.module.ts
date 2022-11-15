import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccomodationPageRoutingModule } from './accomodation-routing.module';

import { AccomodationPage } from './accomodation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccomodationPageRoutingModule
  ],
  declarations: [AccomodationPage]
})
export class AccomodationPageModule {}
