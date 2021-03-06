import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespostaClass } from '../../classes/resposta-class';
import { ConfigClass } from '../../classes/config-class';

const httpOptions = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

const caminho = `${ConfigClass.getUrlApi().toString()}/galeria`;

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<HttpResponse<RespostaClass>> {
    return this.http.get<RespostaClass>(caminho, {observe: 'response'} );
  }
}
