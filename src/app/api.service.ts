import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// http://localhost:3000/participantes/?email_like=walter
// http://localhost:3000/participantes?_sort=apelido&_order=asc

const baseUrl = 'http://localhost:3000/participantes';
const msgUrl = 'http://localhost:3000/frases';

@Injectable({
  providedIn: 'root'
})


export class ApiService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
}
