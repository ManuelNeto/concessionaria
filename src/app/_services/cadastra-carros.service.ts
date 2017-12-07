import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class CadastraCarrosService {

  constructor(private http: HttpClient) {

  }

  cadastraCarro(carro): Observable<any> {
    console.log(carro);
    return this.http.post('http://localhost:8081/carro', carro);
  }

  listarCarros(): Observable<any> {
    return this.http.get('http://localhost:8081/carros');
  }

}
