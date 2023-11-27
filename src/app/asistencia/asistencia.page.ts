import { Component } from '@angular/core';

interface Clase {
  Docente: string;
  curso: string;
  dia: string;
  faltado: number;
  porcentaje: number;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: 'asistencia.page.html',
  styleUrls: ['asistencia.page.scss'],
})
export class AsistenciaPage {
  totalDays = 30;
  materia: Clase[] = [];

  clases: Clase[] = [
    { Docente: 'Profesor: German Barrientos', curso: 'Arquitectura', dia: this.generarDiaAleatorio(), faltado: this.generarPorcentajeAleatorio(), porcentaje: 0 },
    { Docente: 'Profesor: Yessica Betzave Bolivar Romero', curso: 'Calidad De Software', dia: this.generarDiaAleatorio(), faltado: this.generarPorcentajeAleatorio(), porcentaje: 0 },
    { Docente: 'Profesor: Francisco Javier Calfun Gutierrez', curso: 'Programación De Aplicaciones Móviles', dia: this.generarDiaAleatorio(), faltado: this.generarPorcentajeAleatorio(), porcentaje: 0 },
    { Docente: 'Profesor: Nadia Amanda España Alvarado', curso: 'Estadística Descriptiva', dia: this.generarDiaAleatorio(), faltado: this.generarPorcentajeAleatorio(), porcentaje: 0 },
    { Docente: 'Profesor: Boris Felipe Sepúlveda Millar', curso: 'Ética Para El Trabajo', dia: this.generarDiaAleatorio(), faltado: this.generarPorcentajeAleatorio(), porcentaje: 0 },
    { Docente: 'Profesor: Pablo Cesar Proinick Mansilla', curso: 'Inglés Intermedio', dia: this.generarDiaAleatorio(), faltado: this.generarPorcentajeAleatorio(), porcentaje: 0 },
    // Resto de tus materias con estructura similar...
  ];

  constructor() {
    this.calcularPorcentaje();
  }

  ngOnInit() {
    this.calcularPorcentaje();
  }

  actualizarTotalDias(nuevoTotal: number) {
    this.totalDays = nuevoTotal;
    this.calcularPorcentaje();
  }

  calcularPorcentaje() {
    if (this.totalDays > 0) {
      this.materia = this.clases.map((clase) => ({
        ...clase,
        porcentaje: ((this.totalDays - (clase.faltado ? 1 : 0)) / this.totalDays) * 100,
      }));
    }
  }

  generarDiaAleatorio(): string {
    const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    return diasSemana[Math.floor(Math.random() * diasSemana.length)];
  }

  generarPorcentajeAleatorio(): number {
    const randomPercentage = Math.random() * 100; // Genera un número aleatorio entre 0 y 100
    return parseFloat(randomPercentage.toFixed(1)); // Limita a 1 decimal
  }
}