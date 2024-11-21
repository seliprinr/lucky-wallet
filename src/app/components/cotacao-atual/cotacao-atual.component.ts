import { Component } from '@angular/core';
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-cotacao-atual',
  standalone: true,
    imports: [
        CurrencyPipe,
        NgForOf
    ],
  templateUrl: './cotacao-atual.component.html',
  styleUrl: './cotacao-atual.component.css'
})
export class CotacaoAtualComponent {

}
