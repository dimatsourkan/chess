import { Component, Input } from '@angular/core';
import { Chess } from '../../models/chess/chess.model';



@Component({
  selector : 'chess',
  templateUrl : './chess.component.html',
  styleUrls : [
    './chess.component.less'
  ]
})

export class ChessComponent {
  @Input() chess : Chess;

  get chessImg() {
    return `/img/figures/Chess_${this.chess.color}_${this.chess.type}.svg`;
  }
}