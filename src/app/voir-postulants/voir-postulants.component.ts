import { Component, OnInit } from '@angular/core';
import { Postulants } from '../postulants';
import { PostulantsService } from '../postulants.service';
import { Tirageclasse } from '../tirageclasse';
import { TirageserviceService } from '../tirageservice.service';

//aaaa

@Component({ 
  selector: 'app-voir-postulants',
  templateUrl: './voir-postulants.component.html',
  styleUrls: ['./voir-postulants.component.scss']
   
})
export class VoirPostulantsComponent implements OnInit {
  // aaa
  postulants! : Postulants[];

  constructor( /**/ private service : PostulantsService) { }

  ngOnInit(): void {
    // aa
   this.service.getPostulants().subscribe(data=>{
    console.log(data);
     this.postulants=data;
   });
  }

}
