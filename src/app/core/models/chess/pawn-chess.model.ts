import { Chess, CHESS_TYPE, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';
import { ChessPointModel, IChessPointModel } from '../chess-point.model';

export class PawnChess extends Chess {

  readonly type = CHESS_TYPE.PAWN;

  reverseDirection : boolean = false;

  constructor(color : string, x : number, y : number, reverseDirection : boolean) {
    super(color, x, y);
    this.reverseDirection = reverseDirection;
  }

  get canMoveTo() : IChessPointModel[] {

    let x = this.reverseDirection ? this.x - 1 : this.x + 1;
    let xDouble = this.reverseDirection ? this.x - 2 : this.x + 2;
    let y = this.y === 0 ? 0 : this.y - 1;
    let yRight = this.y === ENVIRONMENT.COLS - 1 ? ENVIRONMENT.COLS - 1 : this.y + 1;
    let points : IChessPointModel[] = [
      ChessPointModel(x, this.y, MOVE_TYPES.ONLY_MOVE),
      ChessPointModel(x, y, MOVE_TYPES.ONLY_COLLISION),
      ChessPointModel(x, yRight, MOVE_TYPES.ONLY_COLLISION),
    ];

    if(!this.moved) {
      points.push(ChessPointModel(xDouble, this.y, MOVE_TYPES.ONLY_MOVE));
    }

    return points;
  }

}