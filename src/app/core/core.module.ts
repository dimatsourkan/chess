import { NgModule } from '@angular/core';
import { BoardComponent } from './components/board/board.component';
import { CommonModule } from '@angular/common';
import { ChessComponent } from './components/chess/chess.component';
import { ChessBoardComponent } from './components/chess-board/chess-board.component';
import { ChessBoardService } from './components/chess-board/chess-board.service';



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