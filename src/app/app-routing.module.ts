import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodosComponent } from './components/todos/todos.component';
import { Ultimo5anosComponent } from './components/ultimo5anos/ultimo5anos.component';
import { AntiguosComponent } from './components/antiguos/antiguos.component';
import { AuthGuard } from './authguard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'todos', component:TodosComponent},
  {path: 'ultimos5anos', component:Ultimo5anosComponent, canActivate: [AuthGuard]},
  {path: 'antiguos', component:AntiguosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
