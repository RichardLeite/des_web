import { Component, OnInit } from '@angular/core';
import { EstadoFiltros } from '../../../models/estado-filtros';
import { HomeService } from '../../../services/home.service';
import { Conteudo } from '../../../models/conteudo';
import { finalize } from 'rxjs';
import { SpinnerService } from '../../../services/spinner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaConteudo: Conteudo[] = [];
  listaRelease: Conteudo[] = [];
  public estadoFiltro: EstadoFiltros = new EstadoFiltros();
  constructor(private homeService: HomeService, private spinnaerService: SpinnerService) { }

  ngOnInit(): void {
    this.spinnaerService.exibirLoader();
    this.movieFocus();
    this.homeService.buscarNovoLancamentos('movies').pipe(
      finalize(() => {
        this.spinnaerService.fecharLoader();
      })
    ).subscribe((data) => {
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
    this.spinnaerService.exibirLoader();
    this.homeService.buscarFilmes().pipe(
      finalize(() =>
        this.spinnaerService.fecharLoader()
      )
    ).subscribe((data) => {
      this.listaConteudo = data.lista;
      this.estadoFiltro.alterarParaMovie();
    });

    // this.homeService.buscarFilmes().pipe()
    return this.estadoFiltro.isMovieActivated;
  }

  tvShowFocus(): boolean {
    this.spinnaerService.exibirLoader();
    this.homeService.buscarTVShow().pipe(
      finalize(() => this.spinnaerService.fecharLoader())
    ).subscribe((data) => {
      this.listaConteudo = data.lista;
      this.estadoFiltro.alterarParaTVShow();
    });
    return this.estadoFiltro.isTVShowActivated;
  }

  serieFocus(): boolean {
    this.spinnaerService.exibirLoader();
    this.homeService.buscarSeries().pipe(
      finalize(() => this.spinnaerService.fecharLoader())
    ).subscribe((data) => {
      this.listaConteudo = data.lista;
      this.estadoFiltro.alterarParaSeries();
    });
    return this.estadoFiltro.isSeriesActivated;
  }
}
