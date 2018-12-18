import { Injectable } from '@angular/core';
import { Chess, CHESS_COLOR, CHESS_TYPE, IChess } from '../../models/chess/chess.model';
import { RookChess } from '../../models/chess/rook-chess.model';
import { KnightChess } from '../../models/chess/knight-chess.model';
import { BishopChess } from '../../models/chess/bishop-chess.model';
import { PawnChess } from '../../models/chess/pawn-chess.model';
import { KingChess } from '../../models/chess/king-chess.model';
import { QueenChess } from '../../models/chess/queen-chess.model';
import { IChessPointModel } from '../../models/chess-point.model';

declare var require : any;
let matrix = require('./chess-matrix.json');

const STATE = {
  MATRIX : 'matrix',
  CURRENT : 'current'
};

@Injectable()
export class ChessBoardService {

  bgDark : string = '#b86736';
  bgLight : string = '#e8d1af';

  // Матрица возможных ходов выбраной фигуры
  movesMatrix : any[][] = [];

  // Матрица с фигурами на доске
  chessMatrix : Chess[][] = [];

  // Текущая выбранная фигура
  currentChess : Chess;

  // Текущее положение курсора над доской
  currentPosition = {x : 0, y : 0};

  // Переменная хранит текущее состояние фигур в JSON
  currentStateInJSON : string;

  lastMoveColor : string = CHESS_COLOR.BLACK;

  constructor() {
    this.setMatrix();
  }

  /**
   * Построение матрицы возможных ходов
   */
  private setMovesMatrix() {

    if(!this.currentChess) {
      return [];
    }

    this.movesMatrix = this.currentChess.getMovesMatrix(this.chessMatrix);
  }

  /**
   * Установка матрицы с фигурами
   */
  private setMatrix() {

    let savedMatrix = this.getSavedMatrix() || matrix;

    savedMatrix.forEach((row, i) => {
      this.chessMatrix[i] = [];
      row.forEach((chess : IChess, j) => {
        this.chessMatrix[i][j] = this.createChess(chess, i, j);
      });
    });

  }

  /**
   * Проверка коллизий текщей фигуры
   * @param {IChessPointModel} moveTo
   * @returns {boolean}
   */
  private checkCollisions(moveTo : IChessPointModel) {
    return this.currentChess.checkCollisions(this.chessMatrix, moveTo);
  }

  /**
   * Фабричный метод
   * Создает и возвращает нужный объект в зависимости от типа фигуры
   * @param {IChess} chessData
   * @param {number} x
   * @param {number} y
   * @returns {any}
   */
  private createChess(chessData : IChess, x : number, y : number) : Chess {

    if(!chessData) {
      return null;
    }

    switch(chessData.type) {
      case CHESS_TYPE.PAWN : return new PawnChess(chessData.color, x, y, chessData.reverseDirection);
      case CHESS_TYPE.KING : return new KingChess(chessData.color, x, y);
      case CHESS_TYPE.QUEEN : return new QueenChess(chessData.color, x, y);
      case CHESS_TYPE.BISHOP : return new BishopChess(chessData.color, x, y);
      case CHESS_TYPE.KNIGHT : return new KnightChess(chessData.color, x, y);
      case CHESS_TYPE.ROOK : return new RookChess(chessData.color, x, y);
    }

  }

  /**
   * TODO - Запись json которая требуется по ТЗ
   */
  private updateState() {
    this.currentStateInJSON = JSON.stringify(this.chessMatrix);
  }

  /**
   * Получение сохраненной матрицы с фигурами
   * @returns {any}
   */
  private getSavedMatrix() {
    try {
      return JSON.parse(window.localStorage.getItem(STATE.MATRIX));
    } catch(err) {
      console.log('Matrix not saved');
      return null;
    }
  }

  /**
   * Очиста данных после перемещения фигуры
   */
  private updateDataAfterMove() {
    this.lastMoveColor = this.currentChess.color;
    this.updateState();
    this.setMovesMatrix();
    this.movesMatrix = [];
    this.currentChess = null;
  }

  /**
   * Установка текущего положения курсора над шахматной доской
   * Требуется для работы Drag & Drop
   * @param {number} x
   * @param {number} y
   */
  setPosition(x : number, y : number) {
    this.currentPosition.x = x;
    this.currentPosition.y = y;
  }

  /**
   * Установка текущей выбраной фигуры
   * @param {Chess} chess
   */
  setCurrent(chess : Chess) {

    if(this.lastMoveColor === chess.color) {
      return;
    }

    this.currentChess = chess;
    this.setMovesMatrix();
  }

  /**
   * Перемещение выбраной фигуры на координаты над которыми находится курсор
   */
  moveCurrent() {

    if(!this.currentChess) {
      return;
    }

    let currentX = this.currentChess.x;
    let currentY = this.currentChess.y;

    let moveTo = { x : this.currentPosition.x, y : this.currentPosition.y };

    if(this.checkCollisions(moveTo)) {

      this.currentChess.changePosition(this.currentPosition.x, this.currentPosition.y);
      this.chessMatrix[this.currentChess.x][this.currentChess.y] = this.currentChess;
      this.chessMatrix[currentX][currentY] = null;
      this.updateDataAfterMove();
    }
  }

  clearData() {
    this.lastMoveColor = CHESS_COLOR.BLACK;
    this.currentChess = null;
    this.movesMatrix = [];
  }

  /**
   * Очистка сохраненного json
   */
  resetState() {
    window.localStorage.removeItem(STATE.MATRIX);
    this.clearData();
    this.setMatrix();
  }

  /**
   * Сохранение матрицы с фигурами в localStorage
   */
  saveState() {
    window.localStorage.setItem(STATE.MATRIX, this.currentStateInJSON);
  }

  loadState() {
    this.clearData();
    this.setMatrix();
  }

}
