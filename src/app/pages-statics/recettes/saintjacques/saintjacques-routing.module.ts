import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaintjacquesPage } from './saintjacques.page';

const routes: Routes = [
  {
    path: '',
    component: SaintjacquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaintjacquesPageRoutingModule {}
