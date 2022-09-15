import { Component, OnInit } from '@angular/core';
import { FormGroup,NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { count } from 'rxjs';
import { Postulants } from '../postulants';
import { PostulantsService } from '../postulants.service';
import { Tirageclasse } from '../tirageclasse';
// import { TirageserviceService } from '../tirageservice.service';

//aaaa

@Component({ 
  selector: 'app-voir-postulants',
  templateUrl: './voir-postulants.component.html',
  styleUrls: ['./voir-postulants.component.scss']
   
})
export class VoirPostulantsComponent implements OnInit {
  searchText:any;
  p!:number;
  // aaa
  postulants! : Postulants[];

  formulaireAjout!: FormGroup;
  //fff
  // errormsg:any;
  //  successmg:any;
  //  Postulants: Postulants= new Postulants();
  //  PostulantsForm: FormGroup;
  //  constructor(
  //  private 
  //  ){}

  constructor( /*aaa*/ private service : PostulantsService,
                        private route: ActivatedRoute          
  ) { }

  ngOnInit(): void {
    // aa

    const id_tirage = +this.route.snapshot.params["id_tirage"];

   this.service.getPostulants(id_tirage).subscribe(data=>{
    console.log(data);
     this.postulants=data;
     console.log("Donner "+data)
   });
  }
//ffff
onSubmit(){
  console.log("je suis du console");
alert("je suis cliquer");
}



}
