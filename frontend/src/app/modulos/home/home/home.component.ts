import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  public estadoFiltro: EstadoFiltros = new EstadoFiltros();
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.buscarDados();
  }

  buscarDados(): void {
    this.homeService.buscarDestaques('filmes').subscribe((data) => {
      this.listaConteudo = data.lista;
      console.log(data.lista);
    });
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
