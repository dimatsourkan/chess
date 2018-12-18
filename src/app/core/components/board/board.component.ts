import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ENVIRONMENT } from '../../../../environments/environment';
import { ChessBoardService } from '../chess-board/chess-board.service';



@Component({
  selector : 'board',
  templateUrl : './board.component.html',
  styleUrls : [
    './board.component.less'
  ]
})

export class BoardComponent implements AfterViewInit, OnInit {



  width = 0;
  height = 0;

  constructor(private chessBoardService : ChessBoardService) {}

  getBg(i, j) {
    if(i%2 == 0 && j%2 == 0) {
      return this.chessBoardService.bgDark;
    } else {
      if((i%2 == 1 && j%2 == 1)) {
        return this.chessBoardService.bgDark;
      } else {
        return this.chessBoardService.bgLight;
      }

    }
  }

  get cols() {
    return Array(ENVIRONMENT.COLS);
  }

  get rows() {
    return Array(ENVIRONMENT.ROWS);
  }

  setBoardSize() {

    let ww = window.innerWidth;
    let wh = window.innerHeight;

    if(ww < wh) {
      this.width = this.height = ww - 30;
    } else {
      this.width = this.height = wh - 30;
    }
  }

  ngOnInit() {
    this.setBoardSize();
  }

  ngAfterViewInit() {
    window.addEventListener('resize', () => {
      this.setBoardSize();
    });
  }
}