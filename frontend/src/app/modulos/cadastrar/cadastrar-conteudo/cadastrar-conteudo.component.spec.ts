import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConteudoComponent } from './cadastrar-conteudo.component';

describe('CadastrarConteudoComponent', () => {
  let component: CadastrarConteudoComponent;
  let fixture: ComponentFixture<CadastrarConteudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarConteudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
