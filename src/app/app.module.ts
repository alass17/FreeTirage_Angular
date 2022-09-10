import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { VoirPostulantsComponent } from './voir-postulants/voir-postulants.component';

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    AcceuilComponent,
    ListePostulantComponent,
    VoirPostulantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
