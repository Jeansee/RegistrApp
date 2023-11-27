import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserMultiFormatReader, Result } from '@zxing/library';
import { ActivatedRoute } from '@angular/router';
import { ApitiempoService } from '../apitiempo.service';

@Component({
  selector: 'app-camarita',
  templateUrl: './camarita.page.html',
  styleUrls: ['./camarita.page.scss'],
})
export class CamaritaPage implements OnInit, OnDestroy {
  decodedText: string = '';
  codeReader: BrowserMultiFormatReader = new BrowserMultiFormatReader(); // Inicializar aquí

  constructor(private ActivatedRoute: ActivatedRoute,private tiempoa : ApitiempoService) { }

  clima: any[] = [];
  nombre: string = ''; 
  nombreUsuario=localStorage.getItem('Nombre usuario');
  

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe((params: any) => {
      this.nombreUsuario = params.data;
    });
  }

  ngOnDestroy() {
    this.codeReader.reset();
  }

  scan() {
    this.codeReader
      .decodeFromInputVideoDevice(undefined, 'video')
      .then((result: Result) => {
        this.decodedText = result.getText();
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
