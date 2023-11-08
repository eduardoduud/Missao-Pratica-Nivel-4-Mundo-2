import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = new Livro(0, 0, '', '', []);
  public autoresForm: string = '';
  public titulo: string = '';
  public resumo: string = '';
  public editoraSelecionada: number = 1;
  public opcoes: { value: number; text: string }[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.opcoes = this.servEditora.getEditoras().map((editora) => ({
      value: editora.codEditora,
      text: editora.nome,
    }));
  }

  incluir(): void {
    const autoresArray = this.autoresForm
      .split('\n')
      .map((autor) => autor.trim());
    this.livro.autores = autoresArray;

    this.livro.codEditora = Number(this.editoraSelecionada);
    console.log(this.livro);

    this.servLivros.incluir(this.livro);

    this.router.navigateByUrl('/lista');
  }
}
