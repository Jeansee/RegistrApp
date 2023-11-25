import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CosoGuard implements CanActivate {

  constructor(private router : Router, private alertController: AlertController){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) : boolean{
    if (localStorage.getItem('userIngresado')) {
      return true; // Usuario autenticado, permitir acceso.
    } else {
      this.router.navigate(['/login']);
      return false; // Usuario no autenticado, redirigir a la página de inicio de sesión.
    }
  }


}
