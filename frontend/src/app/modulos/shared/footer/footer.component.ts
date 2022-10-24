import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public isHomeActivated: boolean = true;
  public isFavActivated: boolean = false;
  public isPlayActivated: boolean = false;


  public readonly CONSTANTES = Constantes;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irHome() {
    this.isHomeActivated = true;
    this.isFavActivated = false;
    this.isPlayActivated = false;

    console.log(this.router.url);
    this.router.navigateByUrl('home');
  }

  irFavoritos() {

  }

  irPlay() {

  }

  irProfile() {

  }
}
