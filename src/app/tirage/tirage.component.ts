import { Component, OnInit } from '@angular/core';
import { Import } from '../import';
import { ListePostulantComponent } from '../liste-postulant/liste-postulant.component';
import { Tirageclasse } from '../tirageclasse';
import { TirageserviceService } from '../tirageservice.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html',
  styleUrls: ['./tirage.component.scss']
})
export class TirageComponent implements OnInit {
  libelle!:any;
  tirage: Tirageclasse = new Tirageclasse();
  liste!:Import;
  nombree:any


  constructor(private tirageService:TirageserviceService) { }

  ngOnInit(): void {
  }
  SauverTirage(){
    this.tirageService.CreateTirage(this.tirage,this.libelle,this.nombree).subscribe(data =>{
      console.log(data);
    })
  }
  OnSubmit(){
    console.log(this.tirage);
    this.SauverTirage();
  }

}
