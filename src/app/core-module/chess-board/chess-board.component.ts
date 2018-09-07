import { Component } from '@angular/core';
import { ChessBoardService } from './chess-board.service';
import { Chess } from '../chess/chess-types/chess.model';

@Component({
  selector : 'chess-board',
  templateUrl : './chess-board.component.html',
  styleUrls : [
    './chess-board.component.less'
  ]
})

export class ChessBoardComponent {

  constructor(public chessBoardService : ChessBoardService) {

  }

  selectChess(chess : Chess, x : number, y : number) {

    if(chess) {
      this.chessBoardService.setCurrent(chess);
    }

    this.chessBoardService.setPosition(x, y);
    this.chessBoardService.moveCurrent()
  }

}