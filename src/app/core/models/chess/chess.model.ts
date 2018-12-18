import { ENVIRONMENT } from '../../../../environments/environment';
import { IChessPointModel } from '../chess-point.model';

export const CHESS_TYPE = {
  PAWN : 'Pawn',
  KING : 'King',
  QUEEN : 'Queen',
  BISHOP : 'Bishop',
  KNIGHT : 'Knight',
  ROOK : 'Rook'
};

export const CHESS_COLOR = {
  WHITE : 'White',
  BLACK : 'Black'
};

export const MOVE_TYPES = {
  ONLY_MOVE : 'only_move',
  ONLY_COLLISION : 'only_collision',
  ALWAYS : 'always'
};

export interface IChess {
  reverseDirection : boolean;
  type : string;
  color : string;
  moved : boolean;
  x : number;
  y : number;
  canMoveTo : IChessPointModel[];

  checkCollisions(chessMatrix : Chess[][], canMoveTo : IChessPointModel) : boolean;

  changePosition(x : number, y : number);
}

export abstract class Chess implements IChess {
  readonly type : string;
  readonly color : string;

  reverseDirection : boolean = false;
  moved = false;

  x : number;
  y : number;

  constructor(color : string, x : number, y : number) {
    this.color = color;
    this.x = x;
    this.y = y;
  }

  get canMoveTo() : IChessPointModel[] {
    return [{x : 0, y : 0, moveType : MOVE_TYPES.ALWAYS}];
  }

  /**
   * Проверка на возможность перемещения к нужным координатам
   * @param {IChessPointModel} coord
   * @returns {IChessPointModel}
   */
  canMoveToCoordinates(coord : IChessPointModel) : IChessPointModel {
    return this.canMoveTo.filter(c => c.x === coord.x && c.y === coord.y)[0];
  }

  /**
   * Проверка коллизий для типа MOVE_TYPES.ALWAYS
   * @param {Chess} collision
   * @returns {boolean}
   */
  getAlwaysCollision(collision ? : Chess) : boolean {

    if(!collision) {
      return true;
    }

    return this.color !== collision.color;
  }

  /**
   * Проверка коллизий для типа MOVE_TYPES.ONLY_COLLISION
   * @param {Chess} collision
   * @returns {boolean}
   */
  getOnlyCollision(collision ? : Chess) : boolean {

    if(!collision) {
      return false;
    }

    return this.color !== collision.color;
  }

  /**
   * Изменение координат фигуры
   * @param {number} x
   * @param {number} y
   */
  changePosition(x : number, y : number) {
    this.moved = true;
    this.x = x;
    this.y = y;
  }

  /**
   * Проверка коллизий
   * @param {Chess[][]} chessMatrix
   * @param {IChessPointModel} moveTo
   * @returns {boolean}
   */
  checkCollisions(chessMatrix : Chess[][], moveTo : IChessPointModel) : boolean {

    let canMoveTo = this.canMoveToCoordinates(moveTo);
    let collision = chessMatrix[moveTo.x][moveTo.y];

    if(canMoveTo) {

      switch (canMoveTo.moveType) {
        case MOVE_TYPES.ONLY_MOVE      :
          return !collision;
        case MOVE_TYPES.ALWAYS         :
          return this.getAlwaysCollision(collision);
        case MOVE_TYPES.ONLY_COLLISION :
          return this.getOnlyCollision(collision);
      }

    } else {

      return false;

    }

    return false;
  }

  /**
   * Получение матрицы возможных перемещений с учетом коллизий
   * @param {Chess | number[][]} chessMatrix
   * @returns {number[][]}
   */
  getMovesMatrix(chessMatrix : Chess[][]) {

    let movesMatrix : any[][] = [];

    for (let i = 0; i < ENVIRONMENT.ROWS; i++) {

      movesMatrix[i] = [];

      for (let j = 0; j < ENVIRONMENT.COLS; j++) {

        let canMoveTo = this.canMoveTo.filter((c) => c.x === i && c.y === j)[0];

        if(canMoveTo) {
          if(this.checkCollisions(chessMatrix, canMoveTo)) {
            movesMatrix[i][j] = true;
          } else {
            movesMatrix[i][j] = null;
          }
        } else {
          movesMatrix[i][j] = null;
        }

      }
    }

    return movesMatrix;
  }
}
