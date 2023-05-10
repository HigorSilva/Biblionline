import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoComponent } from './views/aluno/aluno.component';
import { EmprestimoComponent } from './views/emprestimo/emprestimo.component';
import { FuncionarioComponent } from './views/funcionario/funcionario.component';
import { HomeComponent } from './views/home/home.component';
import { LivroComponent } from './views/livro/livro.component';
import { LoginComponent } from './views/login/login.component';
import { PesquisaComponent } from './views/pesquisa/pesquisa.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},{
  path:"emprestimo",
  component: EmprestimoComponent
},{
  path:"funcionario",
  component: FuncionarioComponent
},{
  path:"aluno",
  component: AlunoComponent
},{
  path:"livro",
  component: LivroComponent
},{
  path:"pesquisa",
  component: PesquisaComponent
},{
  path:"login",
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
