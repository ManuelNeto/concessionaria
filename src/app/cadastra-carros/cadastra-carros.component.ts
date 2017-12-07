import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from "@angular/common/http";
import { CadastraCarrosService }  from '../_services/cadastra-carros.service';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-cadastra-carros',
  templateUrl: './cadastra-carros.component.html',
  styleUrls: ['./cadastra-carros.component.css']
})
export class CadastraCarrosComponent implements OnInit {

  carro;

  constructor(private cadastraCarrosService : CadastraCarrosService,private app: AppComponent) {
    this.carro = {};

  }

  cadastraCarro(){
      this.cadastraCarrosService.cadastraCarro(this.carro).subscribe((res)=>{
        console.log('Carro cadastrado com sucesso');
        this.app.redirect("lista-carros");
      },(response: HttpErrorResponse) => {
        console.log('Erro no cadastro de carro');
      })
  };

  ngOnInit() {
  }

}
