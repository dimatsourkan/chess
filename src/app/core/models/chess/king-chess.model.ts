import { Chess, CHESS_TYPE, MOVE_TYPES } from './chess.model';
import { ChessPointModel, IChessPointModel } from '../chess-point.model';



export class KingChess extends Chess {

  readonly type = CHESS_TYPE.KING;

  get canMoveTo() : IChessPointModel[] {

    return [
      ChessPointModel(this.x - 1, this.y - 1, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x, this.y - 1, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x + 1, this.y - 1, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x - 1, this.y + 1, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x, this.y + 1, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x + 1, this.y + 1, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x - 1, this.y, MOVE_TYPES.ALWAYS),
      ChessPointModel(this.x + 1, this.y, MOVE_TYPES.ALWAYS),
    ];
  }
}