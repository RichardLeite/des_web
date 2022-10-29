export class Conteudo {
  public imagem: string = '';
  public titulo: string = '';
  public descricao: string = '';
  public faixaetaria: string = '';
  public genero: string[] = [];
  public avaliacao: number = 0;

  public diretor?: string;
  public roterista?: string;
  public dataLancamento?: Date;
  public bilheteriaArrecadada?: number;
  public idiomaConteudo?: string;
  public tempoDuracao?: number;
  public email?: string;
}
