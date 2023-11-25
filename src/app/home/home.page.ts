import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(private router: Router, private alertController: AlertController, private ActivatedRoute: ActivatedRoute) { }

  nombre: string = ''; 
  nombreUsuario=localStorage.getItem('Nombre usuario');
  
  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe((params: any) => {
      this.nombreUsuario = params.data;
    });
  }

  irComida() {
    this.router.navigate(['/comida']);
  }

  irqr() {
    this.router.navigate(['/qr']);
  }

  irhorar() {
    this.router.navigate(['/horario']);
  }

  irlogin() {
    this.router.navigate(['/login']);
  }

  cerrarSesion() {
    this.pestania();
    this.nombreUsuario = '';
    localStorage.removeItem('userIngresado');
  }

  async pestania() {
    const alert = await this.alertController.create({
      header: 'Sesion cerrada',
      subHeader: '',
      message: 'La sesión fue cerrada con éxito',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async llamartodo() {
    this.cerrarSesion();
    this.irlogin();
  }

  
}