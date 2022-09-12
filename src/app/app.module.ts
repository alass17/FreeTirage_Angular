import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { VoirPostulantsComponent } from './voir-postulants/voir-postulants.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
//aaa
import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    AcceuilComponent,
    ListePostulantComponent,
    VoirPostulantsComponent,
    DetailsTirageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // aaa
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
