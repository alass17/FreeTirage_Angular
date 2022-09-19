import { Component, OnInit } from '@angular/core';
import { DetailTirageService } from '../detail-tirage.service';

@Component({
  selector: 'app-details-tirage',
  templateUrl: './details-tirage.component.html',
  styleUrls: ['./details-tirage.component.scss']
})
export class DetailsTirageComponent implements OnInit {
  a!:number;
  detail!:any;
  tirages_id_tirage!:number;

  constructor( private detail1:DetailTirageService) { }

  ngOnInit(): void {
    this.detail1.getDetailTirage(this.tirages_id_tirage).subscribe(data=>{
      this.detail=data
    })
  }

}
