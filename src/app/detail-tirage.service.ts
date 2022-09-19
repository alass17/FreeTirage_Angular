import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailTirageService {

  constructor( private http:HttpClient) { }

  getDetailTirage(tirages_id_tirage:number):Observable<object>{
    return this.http.get(`http://localhost:8080/listepostulant/read`)

  }
//   getDetailTiragee(tirages_id_tirage:number):Observable<object>{
//     return this.http.get(`http://localhost:8080/tirage/lesTirer/${tirages_id_tirage}`)

//  }
}
