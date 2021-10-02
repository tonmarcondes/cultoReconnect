import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParticipanteModel } from '../../src/app/models/participantes';

// http://localhost:3000/participantes/?email_like=walter
// http://localhost:3000/participantes?_sort=apelido&_order=asc

const partUrl = 'http://localhost:3000/participantes/';

@Injectable({
  providedIn: 'root'
})

export class ParticipanteService {

  constructor(private http: HttpClient) { }

  listarParticipantes() : Observable<any>{
    return this.http.get('http://localhost:3000/participantes/?_sort=id&_order=desc');
  }

  listaFrases() : Observable<any>{
    return this.http.get('http://localhost:3000/participantes/frases')
  }

  findByEmail(email:string){
    return this.http.get<ParticipanteModel[]>('http://127.0.0.1:3000/participantes?email=' + email);
  }

  salvarParticipante(participante: ParticipanteModel) {
    return this.http.post('http://localhost:3000/participantes/', participante);
  }

  excluirParticipante(participante: ParticipanteModel) {
    return this.http.delete('http://localhost:3000/participantes/'+ participante.id);
  }

  atualizarParticipante(participante: ParticipanteModel) {
    return this.http.put('http://localhost:3000/participantes/'+participante.id, participante);
  }

}
