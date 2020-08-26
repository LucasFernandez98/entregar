import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  constructor( private http: HttpClient) { }
  api_url= 'https://rickandmortyapi.com/api/';
  getAllListado(code: string): Observable <any> {
    const path = this.api_url  + code;
    return this.http.get(path);
  }
}
