import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncursionesPageRoutingModule } from './incursiones-routing.module';

import { IncursionesPage } from './incursiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncursionesPageRoutingModule
  ],
  declarations: [IncursionesPage]
})
export class IncursionesPageModule {}
