export interface IChessPointModel {
  x : number;
  y : number;
  moveType? : string;
}

export function ChessPointModel(x : number, y : number, moveType? : string) : IChessPointModel {
  return {
      x : x,
      y : y,
      moveType : moveType
  };
}
