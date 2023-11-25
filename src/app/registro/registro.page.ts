import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  username: any;
  password: any;

  constructor(private router: Router, private storage: Storage, private alertController: AlertController) {}

  async ngOnInit() {
    await this.storage.create()
  }

  volverlogin() {
    console.log("vollogin() se llamó");
    this.router.navigate(['login']);
  }

  async registro(){

    if (!this.username || !this.password) {
      this.mostrarAlerta("Campos vacíos", "Por favor, completa todos los campos.");
      return;
    }else{
      console.log("Usuario registrado");
      await this.storage.set(this.username, this.password);
      this.pestania()

    }

    }

    async pestania() {
      const alert = await this.alertController.create({
        header: 'Registro',
        subHeader: 'El registro fue se realizo con exito',
        message: '',
        buttons: ['OK'],
      });
      
      this.volverlogin();
      await alert.present();
    }

    
    async mostrarAlerta(header: string, message: string) {
      const alert = await this.alertController.create({
        header: "Error",
        message: "Campos vacios",
        buttons: ['OK'],
      });
  
      await alert.present();
    }

}
