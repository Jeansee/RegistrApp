import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Ajusta la ruta según la ubicación real

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private userService: UserService) { }

  nombreUsuario: string = '';

  ngOnInit() {
    // Recuperar el nombre de usuario desde el servicio
    this.nombreUsuario = this.userService.getLoggedInUser();
  }
}
