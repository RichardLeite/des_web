import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public readonly CONSTANTES = Constantes;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irHome() {
    this.router.navigateByUrl('home');
  }
}
