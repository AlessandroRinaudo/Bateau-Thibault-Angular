import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DelaBrisePage } from './dela-brise.page';

const routes: Routes = [
  {
    path: '',
    component: DelaBrisePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DelaBrisePageRoutingModule {}
