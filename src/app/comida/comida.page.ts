import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {

  platos: any[] = [];
  nombreUsuario: string = '';
  constructor(private apiService: ApiService, private userService: UserService) { }

  obtenerNOmbre(){
    this.nombreUsuario = this.userService.getLoggedInUser();
  }


  ngOnInit() {
    const nombrePlato = 'Arrabiata'; // Puedes cambiar esto según el nombre del plato que deseas buscar
    this.apiService.buscarPlatoPorNombre(nombrePlato).subscribe(
      (data) => {
        this.platos = data.meals;
        console.log(this.platos); // Asegúrate de que se estén obteniendo los platos en la consola
      },
      (error) => {
        console.error('Error al buscar platos por nombre', error); // Manejo de errores
      }
    );

    const nombrePlato2 = 'Japanese gohan rice'; // Puedes cambiar esto según el nombre del plato que deseas buscar
    this.apiService.buscarPlatoPorNombre(nombrePlato).subscribe(
      (data) => {
        this.platos = data.meals;
        console.log(this.platos); // Asegúrate de que se estén obteniendo los platos en la consola
      },
      (error) => {
        console.error('Error al buscar platos por nombre', error); // Manejo de errores
      }
    );
  }
}
