import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
//aaa
import{ HttpClientModule } from '@angular/common/http';
import { ImportlistComponent } from './importlist/importlist.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
//fff
// VoirPostulant Sucroller la table
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import{NgxPaginationModule} from 'ngx-pagination';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListePostulantComponent } from './liste-postulant/liste-postulant.component';
import { VoirPostulantsComponent } from './voir-postulants/voir-postulants.component';

@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    DetailsTirageComponent,
    ImportlistComponent,
    AcceuilComponent,
    ListePostulantComponent,
    VoirPostulantsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
   
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
