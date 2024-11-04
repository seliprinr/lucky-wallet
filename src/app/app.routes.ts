import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import {TelaUsuarioComponent} from "./components/tela-usuario/tela-usuario.component";

export const routes: Routes = [
  { path: "", redirectTo: "tela-login", pathMatch: "full" },
  { path: "tela-login", component: TelaLoginComponent },
  { path: "tela-usuario", component: TelaUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
