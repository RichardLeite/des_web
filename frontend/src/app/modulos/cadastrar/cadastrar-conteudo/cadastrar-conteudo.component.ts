import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../../../services/home.service';
import { Conteudo } from '../../../models/conteudo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-conteudo',
  templateUrl: './cadastrar-conteudo.component.html',
  styleUrls: ['./cadastrar-conteudo.component.scss']
})
export class CadastrarConteudoComponent implements OnInit {
  forms = this.formBuilder.group({
    titulo: ['', [Validators.required]],
    descricao: ['', Validators.required],
    avaliacao: ['', Validators.required],
    diretor: ['', Validators.required],
    roterista: ['', Validators.required],
    dataLancamento: ['', Validators.required],
    bilheteriaArrecadada: ['', Validators.required],
    idiomaConteudo: ['', Validators.required],
    tempoDuracao: ['', Validators.required],
    email: ['', Validators.required, Validators.email]
  })

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cadastrarConteudo() {
    this.homeService.adicionarConteudo(this.forms.value as Conteudo);
    this.router.navigateByUrl('home');
    console.log(this.forms.value)
  }
}
