import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo: string = "App Com Angular";
  public imagemRandomica: string = "https://source.unsplash.com/random/800x600";
  public imagemLocal: string = "../assets/img/icone-celular.png";

  public atualizar(): void {
    this.titulo = "Texto alterado";
  }
  public acao(): void {
    this.titulo = "Botão clicado";
  }
}
