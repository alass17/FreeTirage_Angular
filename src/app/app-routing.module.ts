import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { TirageComponent } from './tirage/tirage.component';
import { VoirPostulantsComponent } from './voir-postulants/voir-postulants.component';

const routes: Routes = [
  {path:'', component:AcceuilComponent},
  {path:'accueil', component:AcceuilComponent},
  {path:'tirage', component:TirageComponent},
  {path:'Liste Postulant', component:ListePostulantComponent},
  {path:'voir-postulant', component:VoirPostulantsComponent},
  {path:'voir-tirage', component:TirageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
