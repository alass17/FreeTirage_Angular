import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Tirageclasse } from './tirageclasse';
// // aaa
// import{ HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TirageserviceService {

  constructor(private http:HttpClient) { }
  getTirage():Observable<object>{
    return this.http.get("http://localhost:8080/tirage/lesTirer/${tirages_id_tirage}")
  }

  CreateTirage(tirage:Tirageclasse,libelle:string,nombre:number){
    return this.http.post(`http://localhost:8080/tirage/nbretrier/${libelle}/${nombre}`,tirage)
  }
  // getPostulants(): Observable<object>
  // {
  //   // aaaa
  //   return this.http.get("http://localhost:8080/postulant/lire");
  // }
}
