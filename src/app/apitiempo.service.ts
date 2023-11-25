import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApitiempoService {

  link : string = "";

  constructor(private http:HttpClient) { 
    this.link='http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/821?apikey=ZLGaTx3OjNiCTTFmOwb7OjObwLzgB2j7&language=es&metric=true'
  }

  getClima():Observable<any>{
    return this.http.get(this.link).pipe(
      retry(3)
    );
  }
}
