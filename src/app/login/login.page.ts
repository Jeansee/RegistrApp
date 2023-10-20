import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private userService: UserService,
    private alertController: AlertController
  ) {
    this.formularioLogin = this.fb.group({
      'nombre': ['', Validators.required],
      'contrasena': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    const f = this.formularioLogin.value;
    const storedUsername = localStorage.getItem('nombre');
    const storedPassword = localStorage.getItem('contrasena');

    if (storedUsername && storedPassword) {
      if (storedUsername === f.nombre && storedPassword === f.contrasena) {
        this.navCtrl.navigateForward('/home');
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    }
  }

  // Esta es la definición correcta de irRegistro
  irRegistro() {
    console.log("Navegando a registro");
    this.navCtrl.navigateForward('/registro');
  }

  // Esta es la definición correcta de recuperarContrasena
  recuperarContrasena() {
    console.log("Navegando a recuperar");
    this.navCtrl.navigateForward('/recuperar');
  }

  private generateRandomToken(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 32;
    let token = '';

    for (let i = 0; i < tokenLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }

    return token;
  }
}
