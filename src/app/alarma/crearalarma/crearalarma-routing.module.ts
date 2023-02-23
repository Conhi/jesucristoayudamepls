import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearalarmaPage } from './crearalarma.page';

const routes: Routes = [
  {
    path: '',
    component: CrearalarmaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearalarmaPageRoutingModule {}
