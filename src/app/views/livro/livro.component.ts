import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pesquisarLivro(): void{
    alert("Pesquisar");
  }

  incluirLivro(): void{
    alert("Incluir");
  }

  excluirLivro(): void{
    alert("Excluir");
  }

}
