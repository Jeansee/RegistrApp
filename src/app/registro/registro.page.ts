import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = ''; // Propiedad para almacenar el nombre
  contrasena: string = ''; // Propiedad para almacenar la contraseña

  constructor(private router: Router, private userService: UserService) {}

  registrarUsuario() {
    // Obtiene los valores de nombre y contrasena directamente de las propiedades
    const nombre = this.nombre;
    const contrasena = this.contrasena;
    const existingUser = this.userService.getUser(nombre);
    if (!existingUser) {
      // Si no existe el usuario en el localStorage, lo almacenamos
      localStorage.setItem('nombre', nombre);
      localStorage.setItem('contrasena', contrasena);

      // Redirige a la página de inicio de sesión después del registro
      this.router.navigate(['/login']);
      
      // Agregar console.log para verificar el almacenamiento
      console.log('Usuario registrado:');
      console.log('Nombre de usuario:', nombre);
      console.log('Contraseña:', contrasena);
    } else {
      // Maneja el caso en que el usuario ya existe
      console.log('El usuario ya existe');
    }
  }
}
