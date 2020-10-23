import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Villa9troisPage } from './villa9trois.page';

const routes: Routes = [
  {
    path: '',
    component: Villa9troisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Villa9troisPageRoutingModule {}
