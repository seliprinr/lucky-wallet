import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastos-mensais',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './gastos-mensais.component.html',
  styleUrls: ['./gastos-mensais.component.css']
})
export class GastosMensaisComponent {
  descricao: string = '';
  categoria: string = '';
  valor: string = '';
  modalAberto: boolean = false;
  gastos: { descricao: string, categoria: string, valor: number }[] = [];
  totalGastos: number = 0;
  gastoEditando: { descricao: string, categoria: string, valor: number } | null = null;

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.gastoEditando = null;
  }

  adicionarOuEditarGasto() {
    if (this.descricao && this.categoria && this.valor) {
      const valorNumerico = parseFloat(this.valor);
      if (this.gastoEditando) {
        // Atualizar o gasto existente
        this.gastoEditando.descricao = this.descricao;
        this.gastoEditando.categoria = this.categoria;
        this.gastoEditando.valor = valorNumerico;
      } else {
        // Adicionar novo gasto
        const novoGasto = {
          descricao: this.descricao,
          categoria: this.categoria,
          valor: valorNumerico
        };
        this.gastos.push(novoGasto);
      }
      this.calcularTotal();
      this.fecharModal();
      this.limparCampos();
    }
  }

  editarGasto(gasto: { descricao: string, categoria: string, valor: number }) {
    this.descricao = gasto.descricao;
    this.categoria = gasto.categoria;
    this.valor = gasto.valor.toString();
    this.gastoEditando = gasto;  // Guardar o gasto em edição
    this.abrirModal(); // Abrir o modal para edição
  }

  excluirGasto(gasto: { descricao: string, categoria: string, valor: number }) {
    const index = this.gastos.indexOf(gasto);
    if (index > -1) {
      this.gastos.splice(index, 1);
    }
    this.calcularTotal();
  }

  calcularTotal() {
    this.totalGastos = this.gastos.reduce((total, gasto) => total + gasto.valor, 0);
  }

  limparCampos() {
    this.descricao = '';
    this.categoria = '';
    this.valor = '';
  }

  getCategoria(categoria: string): string {
    const categorias: { [key: string]: string } = {
      '1': 'Despesa',
      '2': 'Gasto Inesperado',
      '3': 'Lazer',
      '4': 'Investimento',
      '5': 'Poupança'
    };

    return categorias[categoria] || 'Desconhecida';
  }
}
