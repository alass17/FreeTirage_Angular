import { Injectable } from '@angular/core';
// aaa
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postulants } from './postulants';

@Injectable({
  providedIn: 'root'
})
export class PostulantsService {

  url = "http://localhost:8080/postulant/lire"
  
  constructor(private http:HttpClient) { }

  getPostulants(): Observable<Postulants[]>
  {
    // aaaa
    return this.http.get<Postulants[]>(`${this.url}`);
  }
}
