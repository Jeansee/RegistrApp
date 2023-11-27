import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CosoGuard } from './coso.guard';
import { CosoNoIngresadoGuard } from './coso-noingresado.guard';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[CosoNoIngresadoGuard],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[CosoGuard],
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[CosoNoIngresadoGuard],
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule),
    canActivate:[CosoNoIngresadoGuard]
  },{
    path: 'horario',
    loadChildren: () => import('./horario/horario.module').then( m => m.HorarioPageModule),
    canActivate:[CosoGuard]
  },{
    path: 'camarita',
    loadChildren: () => import ('./camarita/camarita.module').then (m => m.CamaritaPageModule),
    canActivate:[CosoGuard]
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule),
    canActivate:[CosoGuard]
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }