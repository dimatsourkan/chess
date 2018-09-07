import { Chess, CHESS_TYPE, IChessMoveCoordinates, MOVE_TYPES } from './chess.model';
import { ENVIRONMENT } from '../../../../environments/environment';



export class PawnChess extends Chess {

  readonly type = CHESS_TYPE.PAWN;

  reverseDirection : boolean = false;

  constructor(color : string, x : number, y : number, reverseDirection : boolean) {
    super(color, x, y);
    this.reverseDirection = reverseDirection;
  }

  get canMoveTo() : IChessMoveCoordinates[] {

    let points : IChessMoveCoordinates[] = [
      {
        moveType : MOVE_TYPES.ONLY_MOVE,
        x : this.reverseDirection ? this.x - 1 : this.x + 1,
        y : this.y
      },
      {
        moveType : MOVE_TYPES.ONLY_COLLISION,
        x : this.reverseDirection ? this.x - 1 : this.x + 1,
        y : this.y == 0 ? 0 : this.y - 1
      },
      {
        moveType : MOVE_TYPES.ONLY_COLLISION,
        x : this.reverseDirection ? this.x - 1 : this.x + 1,
        y : this.y == ENVIRONMENT.COLS-1 ? ENVIRONMENT.COLS-1 : this.y + 1
      }
    ];

    if(!this.moved) {
      points.push({
        moveType : MOVE_TYPES.ONLY_MOVE,
        x : this.reverseDirection ? this.x - 2 : this.x + 2,
        y : this.y
      });
    }

    return points;
  }


}