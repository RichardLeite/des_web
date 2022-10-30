export class EstadoFiltros {
  public isMovieActivated: boolean = true;
  public isTVShowActivated: boolean = false;
  public isSeriesActivated: boolean = false;

  constructor() {
    this.alterarParaMovie();
  }

  alterarParaMovie() {
    this.isMovieActivated = true;
    this.isTVShowActivated = false;
    this.isSeriesActivated = false;
  }

  alterarParaTVShow() {
    this.isMovieActivated = false;
    this.isTVShowActivated = true;
    this.isSeriesActivated = false;
  }

  alterarParaSeries() {
    this.isMovieActivated = false;
    this.isTVShowActivated = false;
    this.isSeriesActivated = true;
  }
}
