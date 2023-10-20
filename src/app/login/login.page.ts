import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { UserService } from '../user.service'; // Ajusta la ruta según la ubicación real

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
    const storedUsername = localStorage.getItem('nombre'); // Usar 'nombre' para obtener el nombre de usuario
    const storedPassword = localStorage.getItem('contrasena'); // Usar 'contrasena' para obtener la contraseña
  
    if (storedUsername && storedPassword) {
      if (storedUsername === f.nombre && storedPassword === f.contrasena) {
        // Credenciales válidas, navegar a la página de inicio (home)
        this.navCtrl.navigateForward('/home');
  
        // Aquí puedes realizar otras acciones, como guardar un token
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
        await alert.present();
      }
    } else {
      console.log('No se encontraron credenciales en el LocalStorage');
    }
  }
  

  irRegistro(){
    console.log("Navegando a registro");
    this.navCtrl.navigateForward('/registro');
  }

  // Restablecer la contraseña
  recuperarContrasena(){
    console.log("Navengado a recuperar");
    this.navCtrl.navigateForward('/recuperar');
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
