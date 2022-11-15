import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventallPageRoutingModule } from './eventall-routing.module';

import { EventallPage } from './eventall.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventallPageRoutingModule
  ],
  declarations: [EventallPage]
})
export class EventallPageModule {}
