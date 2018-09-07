import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { ChessComponent } from './chess/chess.component';
import { ChessBoardComponent } from './chess-board/chess-board.component';
import { ChessBoardService } from './chess-board/chess-board.service';



@NgModule({
  imports : [
    CommonModule
  ],

  declarations : [
    BoardComponent,
    ChessComponent,
    ChessBoardComponent
  ],

  exports : [
    BoardComponent,
    ChessComponent,
    ChessBoardComponent
  ],

  providers : [
    ChessBoardService
  ]
})

export class CoreModule {

  constructor() {

  }
}