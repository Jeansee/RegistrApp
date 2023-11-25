import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage {
  clases: any[] = [];

  constructor() {
    // Lógica para generar el horario
    this.generarHorario();
  }

  generarHorario() {
    // Aquí puedes llenar el arreglo 'clases' con la información de las clases
    this.clases = [
      { curso: 'Matemáticas', aula: 'Aula 101', dia: 'Lunes', hora: '8:30 AM - 10:00 AM' },
      { curso: 'Lenguaje', aula: 'Aula 102', dia: 'Martes', hora: '11:30 AM - 12:50 AM' },
      { curso: 'Inglés', aula: 'Aula 103', dia: 'Miércoles', hora: '13:00 PM - 14:30 PM' },
      { curso: 'Ciencias Naturales', aula: 'Aula 104', dia: 'Jueves', hora: '12:00 AM - 1:30 PM' },
      // Se puede agregar más objetos con la información de otras clases
    ];
  }
}
