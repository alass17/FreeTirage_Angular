import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Import } from '../import';
import { ImportService } from '../import.service';

@Component({
  selector: 'app-importlist',
  templateUrl: './importlist.component.html',
  styleUrls: ['./importlist.component.scss']
})
export class ImportlistComponent implements OnInit {
  formmodule!:FormGroup;
  file!:any;
  liste!:Import;
  constructor(private request:ImportService, private formB:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.formmodule=this.formB.group({
      libelle:['',Validators.required],
      dateimport:['',Validators.required],
      file:['',Validators.required]
    })
  }

  fileChange(e:any){
    this.file=e.target["files"][0]
  }

  importerliste(){
    this.liste=this.formmodule.value
    this.request.addListe(this.liste.libelle, this.file).subscribe(
      data =>{
      this.formmodule.reset();
    }
  )}

}


