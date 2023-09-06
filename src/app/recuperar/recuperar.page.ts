import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  nuevaContrasena: string = '';
  confirmarContrasena: string = '';
  nombre: string = ''; //Se agregó un campo nuevo para el nombre dwl usuario

  constructor(private router: Router, private userService: UserService) { }

  resetContrasena(){
    console.log('Nombre de usuario:', this.nombre);
    console.log('Nueva contrseña: ', this.nuevaContrasena);
    console.log('Confirmar contraseña', this.confirmarContrasena);

    if (this.nuevaContrasena === this.confirmarContrasena){
      console.log('Contraseñas coinciden');
      //vamos a actualizar la contraseña del usuaruo
      this.userService.updatePassword(this.nombre, this.confirmarContrasena);
      console.log('Contraseña actualizada');

      //Redirige a la pagina de inicio despues de reestrablerec la contraseña
      this.router.navigate(['/login']);
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }

  ngOnInit() {
  }

}
