import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-tela-recuperar-senha',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, NgClass, NgIf],
  templateUrl: './tela-recuperar-senha.component.html',
  styleUrls: ['./tela-recuperar-senha.component.css']
})
export class TelaRecuperarSenhaComponent {
  faArrowLeft = faArrowLeft;
  email: string = '';
  validationMessage: string | null = null;
  isValidEmail: boolean = false;

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/tela-login']);
  }

  validateEmail(): void {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(this.email)) {
      this.isValidEmail = true;
      this.validationMessage = 'E-mail válido! Verifique sua caixa de entrada.';
    } else {
      this.isValidEmail = false;
      this.validationMessage = 'E-mail inválido. Por favor, insira um e-mail válido.';
    }

    setTimeout(() => {
      this.validationMessage = null;
    }, 3000);
  }
}
