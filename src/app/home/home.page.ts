import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApitiempoService } from '../apitiempo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  

  constructor(private router: Router, private alertController: AlertController, private ActivatedRoute: ActivatedRoute, private tiempoa : ApitiempoService) { }

  clima: any[] = [];
  
  nombre: string = ''; 
  nombreUsuario=localStorage.getItem('Nombre usuario');
  nombreSeccion: string = '';
  
  ngOnInit() {
    
    this.tiempo()

    this.ActivatedRoute.queryParams.subscribe((params: any) => {
      this.nombreUsuario = params.data;

    });

    this.generarNombreSeccion();
  }

  irasist() {
    this.router.navigate(['/asistencia']);
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

  irScanner(){
    this.router.navigate(['/camarita']);
  }

  tiempo(){
    this.tiempoa.getClima().subscribe((data: any) =>{
      this.clima = data;
      console.log(this.clima);
    })

  }

  generarNombreSeccion() {
    // Generar tres números aleatorios entre 0 y 9
    const numerosAleatorios = Math.floor(Math.random() * 10).toString() +
                              Math.floor(Math.random() * 10).toString() +
                              Math.floor(Math.random() * 10).toString();
    
    // Generar una letra aleatoria
    const letraAleatoria = String.fromCharCode(97 + Math.floor(Math.random() * 26)); // Letra aleatoria minúscula
    
    // Crear el nombre de sección combinando los números y la letra con un guión
    this.nombreSeccion = `${numerosAleatorios}-${letraAleatoria}`;
  }

}