import { Chess, CHESS_TYPE, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';
import { ChessPointModel, IChessPointModel } from '../chess-point.model';



export class BishopChess extends Chess {

  readonly type = CHESS_TYPE.BISHOP;

  get canMoveTo() : IChessPointModel[] {

    let points : IChessPointModel[] = [];

    let y = this.y;
    for(let x = this.x; x < ENVIRONMENT.ROWS; x++) {

      if(y >= ENVIRONMENT.COLS) {
        break;
      }

      points.push(ChessPointModel(x, y, MOVE_TYPES.ALWAYS));
      y++;
    }

    y = this.y;
    for(let x = this.x; x < ENVIRONMENT.ROWS; x++) {

      if(y < 0) {
        break;
      }

      points.push(ChessPointModel(x, y, MOVE_TYPES.ALWAYS));
      y--;
    }

    y = this.y;
    for(let x = this.x; x >= 0; x--) {

      if(y >= ENVIRONMENT.COLS) {
        break;
      }

      points.push(ChessPointModel(x, y, MOVE_TYPES.ALWAYS));
      y++;
    }

    y = this.y;
    for(let x = this.x; x >= 0; x--) {

      if(y < 0) {
        break;
      }

      points.push(ChessPointModel(x, y, MOVE_TYPES.ALWAYS));
      y--;
    }

    return points;
  }
}
