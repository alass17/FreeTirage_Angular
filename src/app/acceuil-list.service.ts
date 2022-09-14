import { Injectable } from '@angular/core';
//
import{ HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceuilListService {
  

  constructor(/**/ private http:HttpClient) { }
  getAcceuilList():Observable<object>
  {
return this.http.get("http://localhost:8080/listepostulant/lire")
  }
 
  }

