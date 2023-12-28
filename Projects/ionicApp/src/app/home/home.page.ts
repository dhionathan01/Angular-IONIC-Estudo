import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public titulo: string = "App Com Angular";
  public imagemRandomica: string = "https://source.unsplash.com/random/800x600"
}
