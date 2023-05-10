import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pesquisarIsbn(): void{
    alert("isbn");
  }

  pesquisarLivro(): void{
    alert("livro");
  }
}
