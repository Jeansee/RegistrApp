import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ngOnInit() {
    this.token = this.generateRandomToken();
  }

  constructor(private router: Router, private userService: UserService) { }

  nombre = '';
  contrasena = '';
  nuevaContrasena = '';
  confirmarContrasena = '';
  token = '';

  iniciarSesion() {
    const user = this.userService.getUser(this.nombre);

    if (user && user.password === this.contrasena) {
      // Credenciales válidas, redirigir a la página de inicio (home)
      localStorage.setItem('nombre', this.nombre);
      localStorage.setItem('contrasena', this.contrasena);
      this.router.navigate(['/home']);
    } else {
      // Manejar credenciales inválidas, por ejemplo, mostrar un mensaje de error al usuario
      console.log('Usuario o contraseña incorrectos');
    }
  }

  // Restablecer la contraseña
  resetContrasena() {
    console.log('Nueva contraseña:', this.nuevaContrasena);
    console.log('Confirmar contraseña:', this.confirmarContrasena);

    if (this.nuevaContrasena === this.confirmarContrasena) {
      console.log('Contraseñas coinciden');
      this.userService.updatePassword(this.nombre, this.nuevaContrasena);
      console.log('Contraseña actualizada');

      // Redirige a la página de inicio de sesión después del restablecimiento
      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }

  recuperarContrasena() {
    // Navega a la página de recuperar para tener una nueva contraseña
    this.router.navigate(['/recuperar']);
  }

  // Generar un token aleatorio
  private generateRandomToken(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 32; // Longitud del token
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }

    return token;
  }
}
