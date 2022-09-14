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
//fff
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// VoirPostulant Sucroller la table
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import{NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    AcceuilComponent,
    ListePostulantComponent,
    VoirPostulantsComponent,
    DetailsTirageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // aaa
    HttpClientModule,
    //fff
    FormsModule,
    ReactiveFormsModule, 
    // VoirPostulant Sucroller la table
    NgxPaginationModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
