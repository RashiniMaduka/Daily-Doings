import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcmeComponent } from './welcme/welcme.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { TodoComponent } from './todo/todo.component';

import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './service/route-gaurd.service';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcmeComponent,canActivate:[RouteGaurdService]},
  {path:'todos',component:ListTodosComponent,canActivate:[RouteGaurdService]},
  {path:'logout',component:LogoutComponent,canActivate:[RouteGaurdService]},
  {path:'todo/:id',component:TodoComponent,canActivate:[RouteGaurdService]},


  {path:'**',component:ErrorComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
