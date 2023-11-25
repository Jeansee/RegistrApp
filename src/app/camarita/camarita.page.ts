import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserMultiFormatReader, Result } from '@zxing/library';


@Component({
  selector: 'app-camarita',
  templateUrl: './camarita.page.html',
  styleUrls: ['./camarita.page.scss'],
})
export class CamaritaPage implements OnInit, OnDestroy {
  decodedText: string = '';
  codeReader: BrowserMultiFormatReader = new BrowserMultiFormatReader(); // Inicializar aquí

  constructor() { }

  ngOnInit() {
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
