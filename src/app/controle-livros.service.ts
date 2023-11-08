import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    new Livro(1, 1, 'Use a Cabeça: Java', 'blablablabla', [
      'Bert Bates',
      'Kathy Sierra',
    ]),
    new Livro(2, 2, 'Java, como Programar', 'blablablabla', [
      'Paul Deitel',
      'Harvey Deitel',
    ]),
    new Livro(3, 1, 'Core Java for the Impatient', 'blablabla', [
      'Cay Horstmann',
    ]),
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const codigoMaisAlto = this.livros.reduce(
      (max, livro) => (livro.codigo > max ? livro.codigo : max),
      0
    );
    livro.codigo = codigoMaisAlto + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  }
}
