import { Component, OnInit } from '@angular/core';
import { EstadoFiltros } from '../../../models/estado-filtros';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public estadoFiltro: EstadoFiltros = new EstadoFiltros();
  constructor() { }

  ngOnInit(): void {
  }

  movieFocus(): boolean {
    this.estadoFiltro.alterarParaMovie();
    return this.estadoFiltro.isMovieActivated;
  }

  tvShowFocus(): boolean {
    this.estadoFiltro.alterarParaTVShow();
    return this.estadoFiltro.isTVShowActivated;
  }

  serieFocus(): boolean {
    this.estadoFiltro.alterarParaSeries();
    return this.estadoFiltro.isSeriesActivated;
  }
}
