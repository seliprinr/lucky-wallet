import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import  { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-tela-login',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  // faLock = faLock;
  // faSignInAlt = faSignInAlt;
}
