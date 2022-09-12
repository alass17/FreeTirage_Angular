import { Injectable } from '@angular/core';
// aaa
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulantsService {

  constructor(private http:HttpClient) { }

  getPostulants(): Observable<object>
  {
    // aaaa
    return this.http.get("http://localhost:8080/postulant/lire");
  }
}
