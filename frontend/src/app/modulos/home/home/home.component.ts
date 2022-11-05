import { Component, OnInit } from '@angular/core';
import { EstadoFiltros } from '../../../models/estado-filtros';
import { HomeService } from '../../../services/home.service';
import { Conteudo } from '../../../models/conteudo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaConteudo: Conteudo[] = [];
  listaRelease: Conteudo[] = [];
  public estadoFiltro: EstadoFiltros = new EstadoFiltros();
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.movieFocus();

    this.homeService.buscarNovoLancamentos('movies').subscribe((data) => {
      this.listaRelease = data.lista;
      console.log(this.listaRelease);
    });
  }

  buscarDados(): void {
    this.homeService.buscarDestaques('filmes').subscribe((data) => {
      this.listaConteudo = data.lista;
      console.log(data.lista);
    });
  }

  movieFocus(): boolean {
    this.homeService.buscarFilmes().subscribe((data) => {
      this.listaConteudo = data.lista;
      this.estadoFiltro.alterarParaMovie();
    });

    // this.homeService.buscarFilmes().pipe()
    return this.estadoFiltro.isMovieActivated;
  }

  tvShowFocus(): boolean {
    this.homeService.buscarTVShow().subscribe((data) => {
      this.listaConteudo = data.lista;
      this.estadoFiltro.alterarParaTVShow();
    });
    return this.estadoFiltro.isTVShowActivated;
  }

  serieFocus(): boolean {
    this.homeService.buscarSeries().subscribe((data) => {
      this.listaConteudo = data.lista;
      this.estadoFiltro.alterarParaSeries();
    });
    return this.estadoFiltro.isSeriesActivated;
  }
}
