import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { CadastrarConteudoComponent } from './cadastrar-conteudo/cadastrar-conteudo.component';
import { CadastrarRoutingModule } from './cadastrar-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CadastrarClienteComponent,
    CadastrarConteudoComponent
  ],
  imports: [
    CommonModule,
    CadastrarRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CadastrarModule { }
