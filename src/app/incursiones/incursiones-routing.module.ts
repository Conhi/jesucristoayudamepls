import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncursionesPage } from './incursiones.page';

const routes: Routes = [
  {
    path: '',
    component: IncursionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncursionesPageRoutingModule {}
