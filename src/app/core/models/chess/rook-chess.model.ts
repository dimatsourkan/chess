import { Chess, CHESS_TYPE, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';
import { ChessPointModel, IChessPointModel } from '../chess-point.model';



export class RookChess extends Chess {

  readonly type = CHESS_TYPE.ROOK;

  get canMoveTo() : IChessPointModel[] {

    let points : IChessPointModel[] = [];

    for(let i = 0; i < ENVIRONMENT.ROWS; i++) {
      points.push(ChessPointModel(i, this.y, MOVE_TYPES.ALWAYS));
      points.push(ChessPointModel(this.x, i, MOVE_TYPES.ALWAYS));
    }

    return points;
  }
}