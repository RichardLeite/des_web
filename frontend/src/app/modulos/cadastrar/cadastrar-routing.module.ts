import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarConteudoComponent } from './cadastrar-conteudo/cadastrar-conteudo.component';

const cadastrarRoutes = [
  {
    path: 'cliente',
    component: CadastrarClienteComponent
  },
  {
    path: 'conteudo',
    component: CadastrarConteudoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(cadastrarRoutes)],
  exports: [RouterModule]
})
export class CadastrarRoutingModule { }
