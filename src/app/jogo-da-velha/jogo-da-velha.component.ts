import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogodDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogodDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogodDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogodDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogodDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   * 
   * @return void
   */
  iniciarJogo(): void {
    this.jogodDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar em um local no tabuleiro.
   * 
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    this.jogodDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a 
   * coordenada informada.
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogodDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a 
   * coordenada informada.
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogodDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a 
   * coordenada informada.
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogodDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
    return this.jogodDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   * 
   * @return void
   */
  novoJogo(): void {
    return this.jogodDaVelhaService.novoJogo();
  }

}
