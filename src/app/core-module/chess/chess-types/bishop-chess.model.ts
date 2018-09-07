import { Chess, CHESS_TYPE, IChessMoveCoordinates, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';



export class BishopChess extends Chess {

  readonly type = CHESS_TYPE.BISHOP;

  get canMoveTo() : IChessMoveCoordinates[] {

    let points : IChessMoveCoordinates[] = [];

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