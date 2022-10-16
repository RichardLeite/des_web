import { Component, Input, OnInit, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  textoInterno: string = 'Entrar';

  @Input()
  isBackgroundRed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
