import { Component } from '@angular/core';


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
      { Docente:'Profesor: German Barrientos', curso: 'Arquitectura', aula: ' Sala: Y407 ', dia: 'Martes', hora: '8:30 AM - 09:50 AM', aula2:'Sala Y407', dia2: 'Miercoles', hora2: '13:00 PM - 15:10 PM' },
      { Docente:'Profesor: Yessica Bolivar', curso: 'Calidad de Software', aula: 'Sala: Y407', dia: 'Lunes', hora: '15:10 PM - 16:40 PM', aula2:'Sala Y409', dia2: 'Miercoles', hora2: '15:10 PM - 16:40 PM'},
      { Docente:'Profesor: Nadia España', curso: 'Estadistica Descriptiva', aula: 'Sala: Y409', dia: 'Lunes', hora: '13:40 PM - 15:00 PM', aula2:'Sala Y409', dia2: 'Viernes', hora2: '08:30 AM - 09:50 AM'},
      { Docente:'Profesor: Francisco Javier', curso: 'Programacion Aplicaciones Moviles', aula: 'Sala: Y409', dia: 'Lunes', hora: '10:40 AM - 12:10 PM', aula2:'Sala Y409', dia2: 'Miercoles', hora2: '15:10 PM - 16:40 PM'},
      { Docente:'Profesor: Pablo Proinick', curso: 'Ingles Intermedio', aula: 'Sala: Y411', dia: 'Martes', hora: '11:30 AM - 13:40 pM', aula2:'Sala Y410', dia2: 'Miercoles', hora2: '10:00 AM - 11:20 AM'}
    ];
  }

  toggleAccordion(clase: any) {
    clase.expanded = !clase.expanded;
  }
}