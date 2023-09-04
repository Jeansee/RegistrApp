import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Ajusta la ruta según la ubicación real

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router, private userService: UserService) { }

  nombre = '';
  contra = '';


  iniciarSesion() {
    const user = this.userService.getUser(this.nombre);

    if (user && user.password === this.contra) {
      // Credenciales válidas, redirigir a la página de inicio (home)
      this.router.navigate(['/home']);
    } else {
      // Manejar credenciales inválidas
      console.log('Usuario o contraseña incorrectos');
    }
    if (user && user.password === this.contra) {
      // Credenciales válidas, guardar el nombre de usuario y redirigir a la página de inicio (home)
      this.userService.setLoggedInUser(this.nombre);
      this.router.navigate(['/home']);
    } else {
      // Manejar credenciales inválidas
      console.log('Usuario o contraseña incorrectos');
    }
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }

}

