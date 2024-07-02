import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [
  {
    path:'login',   //TODO: http://localhost:4200/auth/login
    component: LoginPageComponent
  },
  {
    path:'**', //TODO: redirecciona todo lo que llegue por aqui a la ruta definida abajo
    redirectTo:'/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
