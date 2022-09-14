import { Component, OnInit } from '@angular/core';
//aa
import { ListpostService } from '../listpost.service';


@Component({
  selector: 'app-liste-postulant',
  templateUrl: './liste-postulant.component.html',
  styleUrls: ['./liste-postulant.component.scss']
})
export class ListePostulantComponent implements OnInit {
  l!:number
  
  // Appel de la classe
     listpost:any;

  constructor(private sevice:ListpostService) { }

  ngOnInit(): void {
    // this.service.getAcceuilList().subscribe(data=>{
    //   this.acceuillist=data;
    this.sevice.getListpost().subscribe(data=>{
      this.listpost=data;

    });
  }

}
