import { Component, Input, OnInit } from '@angular/core';
import { Conteudo } from '../../../models/conteudo';

@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent implements OnInit {

  @Input()
  listaConteudo: Conteudo[] = [];

  @Input()
  categoria: string = '';

  @Input()
  itemBuscado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
