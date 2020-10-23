import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaintjacquesPageRoutingModule } from './saintjacques-routing.module';

import { SaintjacquesPage } from './saintjacques.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaintjacquesPageRoutingModule
  ],
  declarations: [SaintjacquesPage]
})
export class SaintjacquesPageModule {}
