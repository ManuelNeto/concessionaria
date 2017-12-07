import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CadastraCarrosComponent } from './cadastra-carros/cadastra-carros.component';
import { ListaCarrosComponent } from './lista-carros/lista-carros.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: 'lista-carros', pathMatch: 'full'},
  {path: 'lista-carros', component: ListaCarrosComponent},
  {path: 'cadastra-carro', component: CadastraCarrosComponent}
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
