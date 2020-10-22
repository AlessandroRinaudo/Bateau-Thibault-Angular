import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BistrotdesgasconsPage } from './bistrotdesgascons.page';

const routes: Routes = [
  {
    path: '',
    component: BistrotdesgasconsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BistrotdesgasconsPageRoutingModule {}
