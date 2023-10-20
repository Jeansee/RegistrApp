import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CosoGuard implements CanActivate {

  constructor(public navCtrl: NavController, private activeroute: ActivatedRoute){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //obtienen las credenciales del localStorage
      const StoredUsername = localStorage.getItem('nombre');
      const StoredPassword = localStorage.getItem('contrasena');

      if(StoredUsername && StoredPassword){
        console.log("Ingreso de sesión exitoso");
        //se va a la página home
        if (state.url !== '/home'){
        const navigationExtras: NavigationExtras = {
          state: { username: StoredUsername},
        }
        this.navCtrl.navigateForward('home', navigationExtras);
      }
        return true;
      }else{
        console.log("Usuario o contraseña incorrecto");
        this.navCtrl.navigateRoot('login');        
        return false;
      }
  }

}
