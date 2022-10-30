import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss']
})
export class CadastrarClienteComponent implements OnInit {
  forms = this.formBuilder.group({
    nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
    username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    senha: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
  })

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar() {

    this.router.navigateByUrl('home');
  }
}
