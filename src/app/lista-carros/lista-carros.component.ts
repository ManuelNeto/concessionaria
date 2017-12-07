import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { CadastraCarrosService }  from '../_services/cadastra-carros.service';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-lista-carros',
  templateUrl: './lista-carros.component.html',
  styleUrls: ['./lista-carros.component.css']
})
export class ListaCarrosComponent implements OnInit {

  lista_carros;

  constructor(private cadastraCarrosService : CadastraCarrosService, private app: AppComponent) {

  }

  listarCarros(){
      this.cadastraCarrosService.listarCarros().subscribe((res)=>{
        this.lista_carros = res;
        console.log(res);
        console.log('Carros listados com sucesso!!!');
      },(response: HttpErrorResponse) => {
        console.log('Erro na listagem de carros');
      })
  };

  ngOnInit() {
    this.listarCarros();
  }

  goToCadastraCarro(){
    this.app.redirect("cadastra-carro");
  }

}
