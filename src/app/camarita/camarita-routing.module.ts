import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaritaPage } from './camarita.page';

const routes: Routes = [
  {
    path: '',
    component: CamaritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaritaPageRoutingModule {}
