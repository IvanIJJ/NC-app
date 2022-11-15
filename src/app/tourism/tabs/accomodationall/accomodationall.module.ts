import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccomodationallPageRoutingModule } from './accomodationall-routing.module';

import { AccomodationallPage } from './accomodationall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccomodationallPageRoutingModule
  ],
  declarations: [AccomodationallPage]
})
export class AccomodationallPageModule {}
