import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  constructor(private router: Router, private userService: UserService) {}

  nombre = '';
  contra = '';

  registrarUsuario() {
    // Verifica si el usuario ya existe antes de agregarlo
    const existingUser = this.userService.getUser(this.nombre);
    if (!existingUser) {
      this.userService.addUser(this.nombre, this.contra);
      // Redirige a la página de inicio de sesión después del registro
      this.router.navigate(['/login']);
    } else {
      // Maneja el caso en que el usuario ya existe
      console.log('El usuario ya existe');
    }
  }
}
