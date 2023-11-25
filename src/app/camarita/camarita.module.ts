import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaritaPageRoutingModule } from './camarita-routing.module';

import { CamaritaPage } from './camarita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaritaPageRoutingModule
  ],
  declarations: [CamaritaPage]
})
export class CamaritaPageModule {}
