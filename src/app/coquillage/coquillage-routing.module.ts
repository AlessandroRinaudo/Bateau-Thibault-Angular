import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoquillagePage } from './coquillage.page';

const routes: Routes = [
  {
    path: '',
    component: CoquillagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoquillagePageRoutingModule {}
