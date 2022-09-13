import { Component, OnInit } from '@angular/core';
//aa
import { AcceuilListService } from '../acceuil-list.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  //aaa
  acceuillist: any;

  constructor( private service : AcceuilListService) { }

  ngOnInit(): void {
    this.service.getAcceuilList().subscribe(data=>{
      this.acceuillist=data;

    });

  }

}
