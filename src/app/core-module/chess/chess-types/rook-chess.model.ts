import { Chess, CHESS_TYPE, IChessMoveCoordinates, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';



export class RookChess extends Chess {

  readonly type = CHESS_TYPE.ROOK;

  get canMoveTo() : IChessMoveCoordinates[] {

    let points : IChessMoveCoordinates[] = [];

    for(let i = 0; i < ENVIRONMENT.ROWS; i++) {

      points.push({
        moveType : MOVE_TYPES.ALWAYS,
        x : i,
        y : this.y
      });

      points.push({
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x,
        y : i
      });
    }

    return points;
  }
}