import { Chess, CHESS_TYPE, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';
import { ChessPointModel, IChessPointModel } from '../chess-point.model';

export class KnightChess extends Chess {
  readonly type = CHESS_TYPE.KNIGHT;

  get canMoveTo() : IChessPointModel[] {

    let points : IChessPointModel[] = [];

    if(this.x + 2 <= ENVIRONMENT.ROWS) {

      if(this.y + 1 <= ENVIRONMENT.COLS) {
        points.push(ChessPointModel(this.x + 2, this.y + 1, MOVE_TYPES.ALWAYS));
      }

      if(this.y - 1 >= 0) {
        points.push(ChessPointModel(this.x + 2, this.y - 1, MOVE_TYPES.ALWAYS));
      }

    }

    if(this.x - 2 >= 0) {

      if(this.y + 1 <= ENVIRONMENT.COLS) {
        points.push(ChessPointModel(this.x - 2, this.y + 1, MOVE_TYPES.ALWAYS));
      }

      if(this.y - 1 >= 0) {
        points.push(ChessPointModel(this.x - 2, this.y - 1, MOVE_TYPES.ALWAYS));
      }

    }

    if(this.y + 2 <= ENVIRONMENT.COLS) {

      if(this.x + 1 <= ENVIRONMENT.ROWS) {
        points.push(ChessPointModel(this.x + 1, this.y + 2, MOVE_TYPES.ALWAYS));
      }

      if(this.x - 1 >= 0) {
        points.push(ChessPointModel(this.x - 1, this.y + 2, MOVE_TYPES.ALWAYS));
      }

    }

    if(this.y - 2 <= ENVIRONMENT.COLS) {

      if(this.x + 1 <= ENVIRONMENT.ROWS) {
        points.push(ChessPointModel(this.x + 1, this.y - 2, MOVE_TYPES.ALWAYS));
      }

      if(this.x - 1 >= 0) {
        points.push(ChessPointModel(this.x - 1, this.y - 2, MOVE_TYPES.ALWAYS));
      }

    }

    return points;
  }
}