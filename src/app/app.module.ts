import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CadastraCarrosService }  from './_services/cadastra-carros.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { CadastraCarrosComponent } from './cadastra-carros/cadastra-carros.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastraCarrosComponent,
    ListaCarrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [CadastraCarrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
