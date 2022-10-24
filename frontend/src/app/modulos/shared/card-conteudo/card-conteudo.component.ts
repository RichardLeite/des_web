import { Component, Input, OnInit } from '@angular/core';
import { Conteudo } from '../../../models/conteudo';

@Component({
  selector: 'app-card-conteudo',
  templateUrl: './card-conteudo.component.html',
  styleUrls: ['./card-conteudo.component.scss']
})
export class CardConteudoComponent implements OnInit {
  @Input()
  conteudo: Conteudo = new Conteudo();

  constructor() { }

  ngOnInit(): void {
  }

}
