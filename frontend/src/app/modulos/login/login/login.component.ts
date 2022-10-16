import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  forms = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    senha: ['', Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  efetuarLogin(): void {

  }

  recuperarSenha(): void {

  }

  cadastrar(): void {

  }
}
