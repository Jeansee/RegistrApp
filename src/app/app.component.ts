import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.grabar_localstorage();
  }

  grabar_localstorage() {
    // Genera un nombre único o secuencial
    const nombre = this.generarNombreUnico();

    let persona = {
      nombre: nombre,
    }

    localStorage.setItem("nombre", persona.nombre);
  }

  // Función para generar un nombre único aleatorio
  generarNombreUnico() {
    // Genera un número aleatorio único usando un timestamp
    const timestamp = Date.now();
    const nombreUnico = `Usuario_${timestamp}`;

    return nombreUnico;
  }
}
