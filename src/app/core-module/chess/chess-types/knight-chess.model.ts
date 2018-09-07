import { Chess, CHESS_TYPE, IChessMoveCoordinates, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';



export class KnightChess extends Chess {
  readonly type = CHESS_TYPE.KNIGHT;

  get canMoveTo() : IChessMoveCoordinates[] {

    let points : IChessMoveCoordinates[] = [];

    if(this.x+2 <= ENVIRONMENT.ROWS) {

      if(this.y+1 <= ENVIRONMENT.COLS) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x+2,
          y : this.y+1
        });
      }

      if(this.y-1 >= 0) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x+2,
          y : this.y-1
        });
      }

    }

    if(this.x-2 >= 0) {

      if(this.y+1 <= ENVIRONMENT.COLS) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x-2,
          y : this.y+1
        });
      }

      if(this.y-1 >= 0) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x-2,
          y : this.y-1
        });
      }

    }

    if(this.y+2 <= ENVIRONMENT.COLS) {

      if(this.x+1 <= ENVIRONMENT.ROWS) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x+1,
          y : this.y+2
        });
      }

      if(this.x-1 >= 0) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x-1,
          y : this.y+2
        });
      }

    }

    if(this.y-2 <= ENVIRONMENT.COLS) {

      if(this.x+1 <= ENVIRONMENT.ROWS) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x+1,
          y : this.y-2
        });
      }

      if(this.x-1 >= 0) {
        points.push({
          moveType : MOVE_TYPES.ALWAYS,
          x : this.x-1,
          y : this.y-2
        });
      }

    }

    return points;
  }
}