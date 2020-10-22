import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DelaBrisePageRoutingModule } from './dela-brise-routing.module';

import { DelaBrisePage } from './dela-brise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DelaBrisePageRoutingModule
  ],
  declarations: [DelaBrisePage]
})
export class DelaBrisePageModule {}
