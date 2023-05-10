import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.css']
})
export class EmprestimoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pesquisar(): void{
    alert("Pesquisar");
  }

  emprestar(): void{
    alert("Emprestar");
  }

  devolver(): void{
    alert("Devolver");
  }

}
