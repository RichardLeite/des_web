import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, AfterViewInit {
  @Input()
  textoInterno: string = '';

  @Input()
  isHomeActivated: boolean = true;

  @Input()
  isTVShowActivated: boolean = false;

  @Input()
  isSeriesActivated: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.isFocoMovie();
    this.isFocoTVShow();
    this.isFocoSeries();
  }

  isFocoMovie(): boolean {
    return this.textoInterno === 'Movie';
  }

  isFocoTVShow(): boolean {
    return this.textoInterno === 'TV Show';
  }

  isFocoSeries(): boolean {
    return this.textoInterno === 'Series';
  }
}
