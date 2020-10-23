import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Villa9troisPageRoutingModule } from './villa9trois-routing.module';

import { Villa9troisPage } from './villa9trois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Villa9troisPageRoutingModule
  ],
  declarations: [Villa9troisPage]
})
export class Villa9troisPageModule {}
