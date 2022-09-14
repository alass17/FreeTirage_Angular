import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImportService {
  api='http://localhost:8080'

  constructor(private http:HttpClient) { }
  getImport():Observable<object>{
    return this.http.get(`${this.api}/listepostulant/read`)
  }
  addListe(libelle:string,file:any):Observable<void>{
    let data=new FormData();
  data.append("file",file)
  return this.http.post<void>(`${this.api}/postulant/upload/${libelle}`, data);
  }
  
}
