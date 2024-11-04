import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;
    if (username === 'usuario' && password === 'usuario123') {
      Swal.fire({
        icon: 'success',
        title: 'Login bem-sucedido',
        text: 'Bem-vindo!',
        confirmButtonText: 'Continuar'
      }).then(() => {
        this.router.navigate(['/tela-usuario']);
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro no login',
        text: 'Usuário ou senha incorretos',
        confirmButtonText: 'Tentar novamente'
      });
    }
  }
}
