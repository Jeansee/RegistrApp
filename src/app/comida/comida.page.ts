import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-comida',
  templateUrl: './comida.page.html',
  styleUrls: ['./comida.page.scss'],
})
export class ComidaPage implements OnInit {

  platos: any[] = [];
  nombreUsuario: string = '';
  constructor(private apiService: ApiService) { }




  ngOnInit() {

    
  }
}
