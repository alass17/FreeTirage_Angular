import { Injectable } from '@angular/core';
// aaa
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageserviceService {

  constructor(private http:HttpClient) { }
  getPostulants(): Observable<object>
  {
    // Accès pour lire les données à travers @RequestMapping("postulants")
    return this.http.get("http://localhost:8080/postulants");
  }
}
