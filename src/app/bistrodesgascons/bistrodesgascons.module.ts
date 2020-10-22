import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BistrodesgasconsPageRoutingModule } from './bistrodesgascons-routing.module';

import { BistrodesgasconsPage } from './bistrodesgascons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BistrodesgasconsPageRoutingModule
  ],
  declarations: [BistrodesgasconsPage]
})
export class BistrodesgasconsPageModule {}
