import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pesquisarAluno(): void{
    alert("Pesquisar");
  }

  incluirAluno(): void{
    alert("Incluir");
  }

  excluirAluno(): void{
    alert("Excluir");
  }

}
