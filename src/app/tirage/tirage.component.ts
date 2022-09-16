import { Component, OnInit } from '@angular/core';
import { AcceuilListService } from '../acceuil-list.service';
import { Import } from '../import';
import { Listpost } from '../listpost';
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
  // listeposts!:Listpost[];
  // listepost: Listpost=new Listpost ();


  constructor(private tirageservice:TirageserviceService, private accueilService:AcceuilListService) { }

  ngOnInit(): void {
    // this.getListe()
  }
  SauverTirage(){
    this.tirageservice.CreateTirage(this.tirage,this.libelle,this.nombree).subscribe(data =>{
      console.log(data);
    })
  }
  // private getListe(){
  //   this.accueilService.getAcceuilList().subscribe(data =>{
  //     this.libelle=data;
  //   })

  OnSubmit(){
    console.log(this.tirage);
    this.SauverTirage();
  }

}
