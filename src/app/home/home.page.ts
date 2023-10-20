import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'; // Ajusta la ruta según la ubicación real
import { Router, Navigation } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private userService: UserService, private router : Router) { }

  nombreUsuario: string = '';

  ngOnInit() {
    // Recuperar el nombre de usuario desde el servicio
    this.nombreUsuario = this.userService.getLoggedInUser();
  }

  irComida(){
    this.router.navigate(['/comida'])
  }

  irqr(){
    this.router.navigate(['/qr']);
  }

  irlogin(){
    this.router.navigate(['/login'])
  }
}
