import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TirageComponent } from './tirage/tirage.component';
import { DetailsTirageComponent } from './details-tirage/details-tirage.component';
<<<<<<< HEAD
=======
//aaa
import{ HttpClientModule } from '@angular/common/http';
>>>>>>> 79760f727f99ee2722b004f30ac0c1108b1e0b68
@NgModule({
  declarations: [
    AppComponent,
    TirageComponent,
    DetailsTirageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
