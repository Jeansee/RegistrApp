import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AlmacenamientoService } from '../almacenamiento.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
 
  constructor(private router: Router,  private alertController: AlertController, private almacena: AlmacenamientoService) { }

  username: any;
  password:any;

  ngOnInit() {
  }

  async recuperar() {

    const userIngresado = this.username;

    const userExist = this.username;

    if (userExist == null){
      console.log("usuario no existe");
      return;
    }

    await this.almacena.remove(userIngresado);

    await this.almacena.set(userIngresado, this.password);

    console.log("cambiada con exitooooo");

    this.pestania();

    this.router.navigate(['/login'])

  }

  async pestania() {
    const alert = await this.alertController.create({
      header: 'Recuperar',
      subHeader: '',
      message: 'La contraseña se cambio correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
