import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LesfousdelilePageRoutingModule } from './lesfousdelile-routing.module';

import { LesfousdelilePage } from './lesfousdelile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LesfousdelilePageRoutingModule
  ],
  declarations: [LesfousdelilePage]
})
export class LesfousdelilePageModule {}
