import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrotdesgasconsPageRoutingModule } from './bistrotdesgascons-routing.module';

import { BistrotdesgasconsPage } from './bistrotdesgascons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrotdesgasconsPageRoutingModule
  ],
  declarations: [BistrotdesgasconsPage]
})
export class BistrotdesgasconsPageModule {}
