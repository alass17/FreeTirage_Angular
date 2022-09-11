import { Component, OnInit } from '@angular/core';

//aaaa
import{ TirageserviceService } from '../tirageservice.service';

@Component({
  selector: 'app-voir-postulants',
  templateUrl: './voir-postulants.component.html',
  styleUrls: ['./voir-postulants.component.scss']
})
export class VoirPostulantsComponent implements OnInit {
  //postulants: Any;
  postulants :any;

  constructor( /*private service : PostulantService*/ private service : TirageserviceService) { }

  ngOnInit(): void {
    //this.service.getPostulants().subcribe(data=>{
    // this.Postulants=data;
   // })
   this.service.getPostulants().subscribe(data=>{
     this.postulants=data;
   })

  }

}
