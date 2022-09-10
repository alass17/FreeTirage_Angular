import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
  {path:'tirage' ,component:TirageComponent},
  {path:'Détail' ,component:DetailsTirageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
