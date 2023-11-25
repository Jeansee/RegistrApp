import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AlmacenamientoService } from '../almacenamiento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: any;
  password: any;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private alertController: AlertController,
    private storage: Storage,
    private almacena: AlmacenamientoService,
    private router: Router
  ) {
    this.username = localStorage.getItem('username');
    this.username = localStorage.getItem('password')
  }

  async ngOnInit() {

  }

  async login() {

    const usuario: string = this.username.trim();
    const contra: string = this.password.trim();

    const storedPassword = await this.almacena.get(usuario);

    if (storedPassword && storedPassword === contra) {
      console.log('Sesion iniciada correctamente')
      localStorage.setItem('usuario', usuario);
      localStorage.setItem('userIngresado', 'true');
      this.router.navigate(['/home'], { queryParams: { data: this.username } })
    } else {
      this.pestania();
    }
  }

  async validar() {
    if (!this.username || !this.password){
      this.mostrarAlerta();
    }
  }


  // Esta es la definición correcta de irRegistro
  irRegistro() {
    console.log("Navegando a registro");
    this.navCtrl.navigateForward('/registro');
  }

  // Esta es la definición correcta de recuperarContrasena
  irOlvidar() {
    console.log("navegando a recuperar")
    this.router.navigate(['/recuperar']);
  }

  async pestania() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: 'Usuario o contraseña incorrecto',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: "Error",
      message: "Campos vacios",
      buttons: ['OK'],
    });

    await alert.present();
  }

  async llamartodo(){
    this.login();
    this.validar();
  }


}
