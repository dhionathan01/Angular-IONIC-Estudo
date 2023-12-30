import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public titulo: string = "App Com Angular";
  public pesquisa: string = "";
  public resultado: string = "";
  public imagemRandomica: string = "https://source.unsplash.com/random/800x600";
  public imagemLocal: string = "../assets/img/icone-celular.png";

  constructor(private navegacao: NavController) {

  }
  ngOnInit(){

  }
  public atualizar(): void {
    this.titulo = "Texto alterado";
  }
  public acao(): void {
    this.titulo = "Botão clicado";
  }

  public abrirLista(){
    this.navegacao.navigateForward('lista');
  }
  public abrirInformacoes() {
    this.navegacao.navigateForward('informacoes');

  }
  public recuperarConteudoInput() {
    this.resultado = this.pesquisa;
  }
}
