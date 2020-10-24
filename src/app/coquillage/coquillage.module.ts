import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoquillagePageRoutingModule } from './coquillage-routing.module';

import { CoquillagePage } from './coquillage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoquillagePageRoutingModule
  ],
  declarations: [CoquillagePage]
})
export class CoquillagePageModule {}
