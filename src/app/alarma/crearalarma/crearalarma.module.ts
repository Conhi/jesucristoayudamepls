import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearalarmaPageRoutingModule } from './crearalarma-routing.module';

import { CrearalarmaPage } from './crearalarma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearalarmaPageRoutingModule
  ],
  declarations: [CrearalarmaPage]
})
export class CrearalarmaPageModule {}
