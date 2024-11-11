import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './components/tela-login/tela-login.component';
import {TelaUsuarioComponent} from "./components/tela-usuario/tela-usuario.component";
import { TelaRecuperarSenhaComponent, } from "./components/tela-recuperar-senha/tela-recuperar-senha.component";
import {GastosMensaisComponent} from "./components/gastos-mensais/gastos-mensais.component";
import {CarteiraDigitalComponent} from "./components/carteira-digital/carteira-digital.component";
import {CotacaoAtualComponent} from "./components/cotacao-atual/cotacao-atual.component";

export const routes: Routes = [
  { path: "", redirectTo: "tela-login", pathMatch: "full" },
  { path: "tela-login", component: TelaLoginComponent },
  { path: "tela-usuario", component: TelaUsuarioComponent, children: [
    {
    path: "gastos-mensais", component: GastosMensaisComponent
    },
      {
        path: "carteira-digital", component: CarteiraDigitalComponent,
      },
      {
        path: "cotacao-atual", component: CotacaoAtualComponent,
      },
    ] },
  { path: "tela-recuperar-senha", component: TelaRecuperarSenhaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
