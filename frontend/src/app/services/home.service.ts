import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Conteudo } from '../models/conteudo';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  buscarDestaques(tipoLancamentos: string): Observable<any> {
    return this.http.get<any>(`${environment.API_HOST}/api/home/filmes-destaques`);
  }

  buscarNovoLancamentos(tipoLancamentos: string): Observable<any> {
    return this.http.get<any>(`${environment.API_HOST}/api/home/filme/lancamento`);
  }

  buscarFilmes(): Observable<any> {
    return this.http.get<any>(`${environment.API_HOST}/api/home/filmes`);
  }

  buscarSeries(): Observable<any> {
    return this.http.get<any>(`${environment.API_HOST}/api/home/series`);
  }

  buscarTVShow(): Observable<any> {
    return this.http.get<any>(`${environment.API_HOST}/api/home/tv-show`);
  }

  adicionarConteudo(conteudo: Conteudo): void {

  }
}
