import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = "https://www.themealdb.com/api/json/v1/1";

  constructor(private http: HttpClient) { }

  buscarPlatoPorNombre(nombre: string): Observable<any> {
    const url = `${this.apiUrl}/search.php?s=${nombre}`;
    return this.http.get<any>(url);
  }
}
