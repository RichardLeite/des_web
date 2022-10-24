import { Injectable } from '@angular/core';
import { Conteudo } from '../models/conteudo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  buscarDestaques(tipoLancamentos: string): Conteudo[] {
    return [];
  }

  buscarNovoLancamentos(tipoLancamentos: string) {

  }

  buscarFilmes() {

  }

  buscarSeries() {

  }

  buscarTVShow() {

  }
}
