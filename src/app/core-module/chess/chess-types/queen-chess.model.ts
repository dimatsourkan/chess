import { Chess, CHESS_TYPE, IChessMoveCoordinates, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';



export class QueenChess extends Chess {
  readonly type = CHESS_TYPE.QUEEN;

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

    let y = this.y;
    for(let x = this.x; x < ENVIRONMENT.ROWS; x++) {

      if(y >= ENVIRONMENT.COLS) {
        break;
      }

      points.push({
        moveType : MOVE_TYPES.ALWAYS,
        x : x,
        y : y
      });
      y++;
    }

    y = this.y;
    for(let x = this.x; x < ENVIRONMENT.ROWS; x++) {

      if(y < 0) {
        break;
      }

      points.push({
        moveType : MOVE_TYPES.ALWAYS,
        x : x,
        y : y
      });
      y--;
    }

    y = this.y;
    for(let x = this.x; x >= 0; x--) {

      if(y >= ENVIRONMENT.COLS) {
        break;
      }

      points.push({
        moveType : MOVE_TYPES.ALWAYS,
        x : x,
        y : y
      });
      y++;
    }

    y = this.y;
    for(let x = this.x; x >= 0; x--) {

      if(y < 0) {
        break;
      }

      points.push({
        moveType : MOVE_TYPES.ALWAYS,
        x : x,
        y : y
      });
      y--;
    }

    return points;
  }
}