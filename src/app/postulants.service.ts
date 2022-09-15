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

  getPostulants(id_tirage:any): Observable<Postulants[]>
  {
    // aaaa
    return this.http.get<Postulants[]>("http://localhost:8080/tirage/lesTirer/"+`${id_tirage}`);
  }

  // //fff
    createNewUser(data:any): Observable<any> {
    return this.http.post(`${this.url}`, data);
  }
}
