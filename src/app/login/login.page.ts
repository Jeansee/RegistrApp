import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'; // Ajusta la ruta según la ubicación real

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
  contra = '';
  nuevaContrasena ='';
  confirmarContrasena = '';
  token = '';


  iniciarSesion() {
    const user1 = this.userService.getUser(this.nombre);

  if (user1 && user1.password === this.contra) {
    // Credenciales válidas, redirigir a la página de inicio (home)
    this.router.navigate(['/home']);

    // Guardar nombre y contraseña en el localStorage
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('contrasena', this.contra);
  } else {
    // Manejar credenciales inválidas
    console.log('Usuario o contraseña incorrectos');
  }
    /* Se guarda el token en el localstorage */
    localStorage.setItem('token', this.token);

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

  recuperarContrasena(){
    //navega a la página d recuperar para tener una nueva contraseña
    this.router.navigate(['/recuperar']);
  }

  // Ejemplo de depuración
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

/* Se generará un token random */
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

