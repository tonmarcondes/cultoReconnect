import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParticipanteModel } from './models/participantes';

// http://localhost:3000/participantes/?email_like=walter
// http://localhost:3000/participantes?_sort=apelido&_order=asc

const partUrl = 'http://localhost:3000/participantes/';
const msgUrl = 'http://localhost:3000/frases';

@Injectable({
  providedIn: 'root'
})

export class ParticipanteService {

  constructor(private http: HttpClient) { }

  listarParticipantes() : Observable<any>{
    return this.http.get('http://localhost:3000/participantes/');
  }

  findByEmail(email:string){
    console.log(email)
    return this.http.get<ParticipanteModel[]>('http://127.0.0.1:3000/participantes?email=' + email);
  }
}
