import { Component } from '@angular/core';
import { ChessBoardService } from './core-module/chess-board/chess-board.service';


@Component({
  selector : 'app',
  templateUrl : './app.component.html',
  styleUrls : [
    './app.component.less'
  ]
})

export class AppComponent {

  constructor(public chessBoardService : ChessBoardService) {}

  changeDark(color : any) {
    if(color !== this.chessBoardService.bgLight) {
      this.chessBoardService.bgDark = color;
    }
  }

  changeLight(color : any) {
    if(color !== this.chessBoardService.bgDark) {
      this.chessBoardService.bgLight = color;
    }
  }

}
