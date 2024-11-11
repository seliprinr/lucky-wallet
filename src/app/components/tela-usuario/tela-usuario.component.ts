import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tela-usuario',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tela-usuario.component.html',
  styleUrls: ['./tela-usuario.component.css']
})
export class TelaUsuarioComponent {
  constructor(private router: Router) {}

  navegarPara(url: string) {
    this.router.navigate(['tela-usuario', url]);
  }
}
