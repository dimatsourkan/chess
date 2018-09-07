import { Chess, CHESS_TYPE, IChessMoveCoordinates, MOVE_TYPES } from './chess.model';



export class KingChess extends Chess {

  readonly type = CHESS_TYPE.KING;

  get canMoveTo() : IChessMoveCoordinates[] {

    let points : IChessMoveCoordinates[] = [
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x-1,
        y : this.y-1
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x,
        y : this.y-1
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x+1,
        y : this.y-1
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x-1,
        y : this.y+1
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x,
        y : this.y+1
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x+1,
        y : this.y+1
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x-1,
        y : this.y
      },
      {
        moveType : MOVE_TYPES.ALWAYS,
        x : this.x+1,
        y : this.y
      },
    ];

    return points;
  }
}